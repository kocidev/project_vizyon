import Modal from "@/Components/Modal";
import ScrollContainer from "@/Components/ScrollContainer";
import { GetUpComingMovies, GetMovieVideos } from "@/Services/Movie";
import { iMovie } from "@/types/movie.type";
import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const MovieUpComing = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [upComings, setUpComings] = useState<iMovie[]>([]);
    const [selectedTrailer, setSelectedTrailer] = useState<string | undefined>(
        undefined
    );
    const [fetchVideos, setFetchVideos] = useState<number | null>(null);

    useEffect(() => {
        GetUpComingMovies(1).then((movies) => {
            setUpComings(movies);
            setIsLoading(false);
        });
    }, []);

    const OpenTrailerFrame = (id: number) => {
        setFetchVideos(id);
        GetMovieVideos(id).then((videos) => {
            if (videos.length > 0) {
                const filteredData = videos.filter(
                    (item) => item.type === "Trailer" && item.site === "YouTube"
                );
                if (filteredData.length > 0) {
                    setSelectedTrailer(filteredData[0].key);
                }
            }
            setFetchVideos(null);
        });
    };

    return (
        !isLoading && (
            <>
                <div className="px-2 sm:px-0 mt-4 sm:mt-6 mb-2 sm:mb-4">
                    <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold text-2xl sm:text-3xl">
                        Çok Yakında
                    </h1>
                </div>
                <div className="max-sm:px-2 relative">
                    <div className="edge_fade_blur dark:after:bg-fade-dark">
                        <ScrollContainer className="w-full pt-4 gap-6 px-2">
                            {upComings.map((movie, i) => (
                                <div
                                    key={i}
                                    onClick={() => OpenTrailerFrame(movie.id)}
                                    className="flex flex-col justify-center items-center relative group cursor-pointer"
                                >
                                    <div className="relative flex justify-center items-center">
                                        <div
                                            className={classNames(
                                                "w-[6.5rem] h-[6.5rem] absolute rounded-full",
                                                {
                                                    "border-8 border-royal-950 dark:border-lotus-400 border-dashed animate-[spin_10s_linear_infinite]":
                                                        movie.id ===
                                                        fetchVideos,
                                                    "bg-linear-light dark:bg-linear-dark group-hover:animate-[spin_2s_linear_infinite]":
                                                        movie.id !==
                                                        fetchVideos,
                                                }
                                            )}
                                        ></div>
                                        <div className="rounded-full z-10 border-4 border-F7F2EB dark:border-111216 w-24 h-24 overflow-hidden">
                                            {movie.poster_path && (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                                    alt="movie-poster"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="max-w-32 whitespace-nowrap mt-2.5">
                                        <h1 className="text-base font-medium text-ellipsis overflow-hidden">
                                            {movie.title}
                                        </h1>
                                    </div>
                                    <h1 className="text-gray-600 text-sm">
                                        Film
                                    </h1>
                                </div>
                            ))}
                        </ScrollContainer>
                    </div>
                </div>
                <>
                    <Modal
                        show={!!selectedTrailer}
                        onClose={() => setSelectedTrailer(undefined)}
                        closeable
                        className="max-w-4xl"
                    >
                        <ReactPlayer
                            width="100%"
                            height="480px"
                            url={`https://www.youtube.com/watch?v=${selectedTrailer}`}
                            controls
                        />
                    </Modal>
                </>
            </>
        )
    );
};

export default MovieUpComing;
