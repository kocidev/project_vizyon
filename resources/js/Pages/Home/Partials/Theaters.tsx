import { useEffect, useState } from "react";
import classNames from "classnames";
import { GetTheatersMovies } from "@/Services/Movie";
import { iMovie } from "@/types/movie.type";
import { MdArrowForwardIos } from "react-icons/md";
import {
    formatDateToTurkishMonthDay,
    genreIdsToNamesForMovies,
} from "@/Utils/misc";
import LazyLoadedImage from "@/Components/LazyLoadedImage";

interface MovieButtonProps {
    movie: iMovie;
}
interface MovieGridProps {
    movies: iMovie[];
}

const Theaters = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const moviesPerPage = 4;
    const [page, setPage] = useState<number>(1);
    const [vizyondakiler, setVizyondakiler] = useState<iMovie[]>([]);

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
                        <div className="h-2.5 bg-gray-200/25 rounded dark:bg-gray-700/25 w-24"></div>
                    </div>
                </div>
            </div>
        </>
    );

    const SkeletonMovieGrid: React.FC = () => (
        <div className="w-full relative max-sm:px-2 min-h-[620px] md:min-h-[420px]">
            <div
                className={classNames(
                    "h-full grid grid-cols-2 md:grid-cols-4 border-2 border-royal-950 dark:border-lotus-700/75 animate-fade-in"
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
            <div className={classNames("flex relative group")}>
                <div className="w-full h-full relative overflow-hidden">
                    <LazyLoadedImage
                        className="w-full h-full group-hover:scale-105 transition duration-500"
                        src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                        alt={movie.title}
                        height={420}
                    />
                    <div className="absolute w-full h-full bg-black/25 top-0 left-0 flex flex-col justify-between">
                        <div className="flex-col gap-1 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                                {formatDateToTurkishMonthDay(
                                    movie.release_date
                                )}
                            </h1>
                            <h1 className="w-min whitespace-nowrap p-1 text-xs border-l-2 border-111216 bg-111216/50 text-white overflow-hidden max-w-[75%] text-ellipsis">
                                {genreIdsToNamesForMovies(movie.genre_ids)}
                            </h1>
                        </div>
                        <div className="whitespace-nowrap max-w-full w-min">
                            <h1 className="overflow-hidden text-ellipsis py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                                {movie.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );

    const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
        const startIndex = (page - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToDisplay = movies.slice(startIndex, endIndex);

        return (
            <div className="w-full relative max-sm:px-2 min-h-[620px] md:min-h-[420px]">
                <div
                    className={classNames(
                        "h-full grid grid-cols-2 md:grid-cols-4 border-2 border-royal-950 dark:border-lotus-700/75 animate-fade-in"
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
                <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold text-2xl sm:text-2xl">
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
