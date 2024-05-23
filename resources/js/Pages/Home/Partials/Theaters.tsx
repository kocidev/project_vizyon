import useData from "@/Hooks/useData";
import { VizyondakiFilmlerType } from "@/types/DataProviderTypes";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface Movie {
    image: string;
    name: string;
    type: string;
}

interface MovieButtonProps {
    movie: Movie;
    little?: boolean;
}

const Theaters = () => {
    const { GetVizyondakiFilmler } = useData();
    const [vizyondakiler, setVizyondakiler] = useState<VizyondakiFilmlerType[]>(
        []
    );
    useEffect(() => {
        GetVizyondakiFilmler().then((theaters) => {
            setVizyondakiler(theaters);
        });
    }, []);

    const MovieButton: React.FC<MovieButtonProps> = ({ movie, little }) => (
        <button
            className={classNames("flex overflow-hidden relative group", {
                "w-full h-full flex-col": !little,
                "w-1/2": little,
            })}
        >
            <img
                className="group-hover:scale-105 transition duration-500"
                src={movie.image}
                alt={movie.name}
            />
            <div className="absolute w-full h-full bg-black/25 top-0 left-0">
                <div className="flex flex-col gap-1">
                    <div className="absolute top-1 flex-col gap-1 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-havuc bg-havuc/75 dark:border-vadigulu dark:bg-vadigulu/75 text-white font-bold font-typold">
                            {"23 Mayıs"}
                        </h1>
                        <h1 className="w-min whitespace-nowrap p-1 text-xs border-l-2 border-111216 bg-111216/50 text-white overflow-hidden max-w-[75%] text-ellipsis">
                            {movie.type}
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 flex flex-col gap-1 w-full">
                        <h1 className="w-min whitespace-nowrap py-0.5 px-1 text-sm border-l-2 border-havuc bg-havuc/75 dark:border-vadigulu dark:bg-vadigulu/75 text-white font-bold font-typold">
                            {movie.name}
                        </h1>
                    </div>
                </div>
            </div>
        </button>
    );

    interface MovieGridProps {
        movies: Movie[];
    }

    const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => (
        <div className="flex flex-col sm:flex-row border-2 border-havuc/50 dark:border-visne/50">
            <div className="flex flex-col w-full sm:min-w-[50%] sm:max-w-[50%]">
                <div className="flex flex-row">
                    <MovieButton movie={movies[0]} />
                </div>
                <div className="flex flex-row">
                    <MovieButton movie={movies[1]} little />
                    <MovieButton movie={movies[2]} little />
                </div>
            </div>
            <div className="flex flex-col w-full sm:min-w-[50%] sm:max-w-[50%]">
                <div className="flex flex-row">
                    <MovieButton movie={movies[4]} little />
                    <MovieButton movie={movies[5]} little />
                </div>
                <div className="flex flex-row">
                    <MovieButton movie={movies[3]} />
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <h1 className="text-havuc dark:text-current text-xl font-typold font-medium mb-2">
                Vizyondakiler
            </h1>
            {vizyondakiler.length > 0 && <MovieGrid movies={vizyondakiler} />}
        </div>
    );
};

export default Theaters;
