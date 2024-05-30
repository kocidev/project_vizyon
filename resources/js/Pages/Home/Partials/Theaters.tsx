import { useEffect, useState } from "react";
import classNames from "classnames";
import { GetTheatersMovies } from "@/Services/Movie";
import { iMoviesInTheaters } from "@/types/movie.type";
import { MdArrowForwardIos } from "react-icons/md";
import { genreIdsToNamesForMovies } from "@/Utils/misc";

interface MovieButtonProps {
    movie: iMoviesInTheaters;
}
interface MovieGridProps {
    movies: iMoviesInTheaters[];
}

const Theaters = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const moviesPerPage = 4;
    const [page, setPage] = useState<number>(1);
    const [vizyondakiler, setVizyondakiler] = useState<iMoviesInTheaters[]>([]);

    useEffect(() => {
        GetTheatersMovies(1).then((theaters) => {
            setVizyondakiler(theaters.results);
            setIsLoading(false);
        });
    }, []);

    const handlePageClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        forward: boolean
    ) => {
        e.preventDefault();
        const totalPages = Math.ceil(vizyondakiler.length / moviesPerPage);
        if (forward) {
            setPage(page === totalPages ? 1 : page + 1);
        } else {
            setPage(page === 1 ? totalPages : page - 1);
        }
    };

    const SkeletonMovieButton: React.FC = () => (
        <>
            <div
                role="status"
                className={classNames(
                    "flex overflow-hidden relative flex-col w-full h-[420px]"
                )}
            >
                <div className="h-full flex items-center justify-center w-full animate-pulse bg-black/75">
                    <svg
                        className="w-10 h-10 text-gray-200/50 dark:text-gray-600/50"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="absolute w-full h-full bg-black/25 top-0 left-0">
                    <div className="absolute bottom-2 left-2">
                        <div className="h-2.5 bg-gray-200/50 rounded dark:bg-gray-700/50 w-24"></div>
                    </div>
                </div>
            </div>
        </>
    );

    const SkeletonMovieGrid: React.FC = () => (
        <div className="w-full h-full relative max-sm:px-2">
            <div
                className={classNames(
                    "grid grid-cols-2 md:grid-cols-4 border-2 border-royal-950 dark:border-lotus-700/75 animate-fade-in"
                )}
            >
                <SkeletonMovieButton />
                <SkeletonMovieButton />
                <SkeletonMovieButton />
                <SkeletonMovieButton />
            </div>
        </div>
    );

    const MovieButton: React.FC<MovieButtonProps> = ({ movie }) =>
        movie && (
            <button className={classNames("flex relative group")}>
                <div className="w-full h-full relativ overflow-hidden">
                    <img
                        className="group-hover:scale-105 transition duration-500 w-full h-full object-cover"
                        src={
                            "https://image.tmdb.org/t/p/w500/" +
                            movie.poster_path
                        }
                        alt={movie.title}
                    />
                    <div className="absolute w-full h-full bg-black/25 top-0 left-0">
                        <div className="flex flex-col gap-1">
                            <div className="absolute top-1 flex-col gap-1 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                                    {"23 Mayıs"}
                                </h1>
                                <h1 className="w-min whitespace-nowrap p-1 text-xs border-l-2 border-111216 bg-111216/50 text-white overflow-hidden max-w-[75%] text-ellipsis">
                                    {genreIdsToNamesForMovies(movie.genre_ids)}
                                </h1>
                            </div>
                            <div className="absolute bottom-0 left-0 flex flex-col gap-1 w-full overflow-hidden whitespace-nowrap">
                                <h1 className="overflow-hidden w-min py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                                    {movie.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        );

    const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
        const startIndex = (page - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToDisplay = movies.slice(startIndex, endIndex);

        return (
            <div className="w-full h-full relative max-sm:px-2">
                <div
                    className={classNames(
                        "grid grid-cols-2 md:grid-cols-4 border-2 border-royal-950 dark:border-lotus-700/75 animate-fade-in"
                    )}
                >
                    {moviesToDisplay.map((movie, index) => (
                        <MovieButton key={index} movie={movie} />
                    ))}
                </div>
                <>
                    <div className="flex items-center gap-2 absolute top-2 right-2">
                        <button
                            onClick={(e) => handlePageClick(e, false)}
                            className={classNames(
                                "p-1 border-2 rounded-full",
                                "hover:bg-royal-950 dark:hover:bg-lotus-700",
                                "border-white hover:border-royal-950 dark:hover:border-lotus-700",
                                "text-white"
                            )}
                        >
                            <MdArrowForwardIos className="rotate-180" />
                        </button>
                        <button
                            onClick={(e) => handlePageClick(e, true)}
                            className={classNames(
                                "p-1 border-2 rounded-full",
                                "hover:bg-royal-950 dark:hover:bg-lotus-700",
                                "border-white hover:border-royal-950 dark:hover:border-lotus-700",
                                "text-white"
                            )}
                        >
                            <MdArrowForwardIos />
                        </button>
                    </div>
                </>
            </div>
        );
    };

    return (
        <>
            <div className="px-2 sm:px-0 mt-4 sm:mt-6 mb-4">
                <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold text-3xl sm:text-4xl">
                    Vizyondakiler
                </h1>
            </div>
            {isLoading ? (
                <SkeletonMovieGrid />
            ) : (
                vizyondakiler.length > 0 && <MovieGrid movies={vizyondakiler} />
            )}
        </>
    );
};

export default Theaters;
