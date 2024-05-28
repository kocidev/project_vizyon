import useData from "@/Hooks/useData";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { VizyondakiFilmlerType } from "@/types/DataProviderTypes";
import { MdArrowForwardIos } from "react-icons/md";

interface Movie {
    image: string;
    name: string;
    type: string;
}
interface MovieButtonProps {
    movie: Movie;
    little?: boolean;
}
interface MovieGridProps {
    movies: Movie[];
}

const Theaters = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const moviesPerPage = 6;
    const [page, setPage] = useState<number>(1);
    const { GetVizyondakiFilmler } = useData();
    const [vizyondakiler, setVizyondakiler] = useState<VizyondakiFilmlerType[]>(
        []
    );
    useEffect(() => {
        GetVizyondakiFilmler().then((theaters) => {
            setVizyondakiler(theaters);
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

    const MovieButton: React.FC<MovieButtonProps> = ({ movie, little }) => (
        <button
            className={classNames("flex overflow-hidden relative group", {
                "w-full h-full flex-col": !little,
                "w-1/2": little,
            })}
        >
            <img
                className="group-hover:scale-105 transition duration-500 w-full h-full"
                src={movie.image}
                alt={movie.name}
            />
            <div className="absolute w-full h-full bg-black/25 top-0 left-0">
                <div className="flex flex-col gap-1">
                    <div className="absolute top-1 flex-col gap-1 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                            {"23 Mayıs"}
                        </h1>
                        <h1 className="w-min whitespace-nowrap p-1 text-xs border-l-2 border-111216 bg-111216/50 text-white overflow-hidden max-w-[75%] text-ellipsis">
                            {movie.type}
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 flex flex-col gap-1 w-full">
                        <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-royal-950 bg-royal-950/75 dark:border-copper-rose-600 dark:bg-copper-rose-600/75 text-white font-bold">
                            {movie.name}
                        </h1>
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
            <div className="w-full h-full relative">
                <div className="flex flex-col sm:flex-row border-2 border-royal-950/50 dark:border-lotus-700/50 animate-fade-in">
                    <div className="flex flex-col w-full sm:min-w-[50%] sm:max-w-[50%]">
                        <div className="flex flex-row">
                            <MovieButton movie={moviesToDisplay[0]} />
                        </div>
                        <div className="flex flex-row">
                            <MovieButton movie={moviesToDisplay[1]} little />
                            <MovieButton movie={moviesToDisplay[2]} little />
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:min-w-[50%] sm:max-w-[50%]">
                        <div className="flex flex-row">
                            <MovieButton movie={moviesToDisplay[4]} little />
                            <MovieButton movie={moviesToDisplay[5]} little />
                        </div>
                        <div className="flex flex-row">
                            <MovieButton movie={moviesToDisplay[3]} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 absolute bottom-2 right-2">
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
                </div>
            </div>
        );
    };

    return (
        !isLoading && (
            <>
                <div className="px-2 sm:px-0 mt-4 sm:mt-6 mb-4">
                    <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold text-3xl sm:text-4xl">
                        Vizyondakiler
                    </h1>
                </div>
                {vizyondakiler.length > 0 && (
                    <MovieGrid movies={vizyondakiler} />
                )}
            </>
        )
    );
};

export default Theaters;
