import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { iMovie } from "@/types/movie.type";

import { Title, SelectTabs } from "@/Pages/Movie/Partials";
import classNames from "classnames";
import CircularProgressBar from "@/Components/CircularProgressBar";
import LazyLoadedImage from "@/Components/LazyLoadedImage";
import { useState } from "react";
import { GetMovieTheaters } from "@/Services/Movie";
import LoadingDot from "@/Components/LoadingDot";

interface TheaterProps extends PageProps {
    theaters: iMovie[];
}

const Theaters = ({ auth, theaters }: TheaterProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<iMovie[]>(theaters);
    const [page, setPage] = useState<number>(1);

    const handleClickMore = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const newPage = page + 1;

        GetMovieTheaters(newPage)
            .then((newMovies) => {
                if (newMovies.length > 0) {
                    setMovies((prevMovies) => [...prevMovies, ...newMovies]);
                    setPage((prevPage) => prevPage + 1);
                }
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler">
                <div className="w-full h-full flex flex-col mt-20 px-2">
                    <div>
                        <Title />
                        <div className="mt-6">
                            <SelectTabs />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                            {movies &&
                                movies.length > 0 &&
                                movies.map((movie, i) => (
                                    <div
                                        key={i}
                                        className={classNames(
                                            "w-full rounded-3xl relative flex cursor-pointer overflow-hidden items-center justify-center",
                                            "group"
                                        )}
                                    >
                                        <LazyLoadedImage
                                            skeletonClassName={
                                                "h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px]"
                                            }
                                            className="w-full h-full"
                                            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                                            alt="movie-poster"
                                        />
                                        <div
                                            className={classNames(
                                                "absolute bottom-0 w-full px-4 pb-2 pt-4 sm:pt-6",
                                                "bg-white",
                                                "transition-[transform,opacity] duration-300",
                                                "translate-y-full group-hover:translate-y-0",
                                                "opacity-0 group-hover:opacity-100"
                                            )}
                                        >
                                            <h1 className="text-left text-black font-bold overflow-hidden text-ellipsis">
                                                {movie.title}
                                            </h1>
                                            <span className="text-sm font-medium text-gray-500">
                                                {movie.release_date}
                                            </span>
                                            <div className="absolute top-0 left-2 -translate-y-1/2 max-sm:hidden">
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <CircularProgressBar
                                                        value={
                                                            movie.vote_average
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <>
                                            <div className="sm:hidden absolute bottom-1 right-1 z-50">
                                                <CircularProgressBar
                                                    value={movie.vote_average}
                                                />
                                            </div>
                                        </>
                                    </div>
                                ))}
                        </div>
                        <div className="w-full flex items-center mt-16">
                            {!isLoading ? (
                                <button
                                    onClick={handleClickMore}
                                    className={classNames(
                                        "mx-auto p-2 px-8 rounded-3xl h-12",
                                        "transition",
                                        "focus:ring-2 focus:ring-offset-2",
                                        "bg-royal-950 hover:bg-royal-800 focus:bg-royal-800",
                                        "focus:ring-royal-800 dark:focus:ring-lotus-600",
                                        "focus:ring-offset-F7F2EB dark:focus:ring-offset-111216",
                                        "dark:bg-lotus-700 dark:hover:bg-lotus-600 dark:focus:bg-lotus-600"
                                    )}
                                >
                                    <h1 className="text-white dark:text-FFF2D7 font-bold">
                                        Daha fazla yükle...
                                    </h1>
                                </button>
                            ) : (
                                <div className="h-12 flex w-full items-center">
                                    <LoadingDot />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CoreLayout>
        </>
    );
};

export default Theaters;
