import LazyLoadedImage from "@/Components/LazyLoadedImage";
import Modal from "@/Components/Modal";
import ScrollContainer from "@/Components/ScrollContainer";
import { GetMovieVideos } from "@/Services/Movie";
import { iMovie } from "@/types/movie.type";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import ReactPlayer from "react-player";

interface iUpComingPage {
    upComings: iMovie[];
}

const MovieUpComing = ({ upComings }: iUpComingPage) => {
    const [selectedTrailer, setSelectedTrailer] = useState<string | undefined>(
        undefined
    );
    const [fetchVideos, setFetchVideos] = useState<number | null>(null);

    const handleOpenTrailerFrame = (id: number) => {
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

    const GridMember: React.FC<{ movie: iMovie }> = ({ movie }) => (
        <div
            className={classNames(
                "relative min-w-40 max-w-40 group hover:-translate-y-2 transition duration-500 z-20",
                "cursor-pointer"
            )}
        >
            <LazyLoadedImage
                className="w-full h-full"
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={movie.title}
                skeletonClassName="h-[240px] rounded-lg"
                imgClassName="rounded-lg"
            />
            {movie.backdrop_path && (
                <div
                    onClick={() => handleOpenTrailerFrame(movie.id)}
                    className={classNames(
                        "absolute bottom-0 left-1/2",
                        "-translate-x-1/2 translate-y-1/4",
                        "flex justify-center items-center",
                        "transition duration-500",
                        "group-hover:opacity-10 hover:!opacity-100",
                        "z-0"
                    )}
                >
                    <div
                        className={classNames(
                            "w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] absolute rounded-full",
                            {
                                "border-4 border-royal-300 dark:border-lotus-400 border-dashed animate-[spin_10s_linear_infinite]":
                                    movie.id === fetchVideos,
                                "bg-linear-light dark:bg-linear-dark group-hover:animate-[spin_2s_linear_infinite]":
                                    movie.id !== fetchVideos,
                            }
                        )}
                    ></div>
                    <div className="rounded-full w-16 sm:w-20 h-16 sm:h-20 overflow-hidden border border-transparent z-10">
                        <img
                            className="w-full h-full object-cover"
                            src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                            alt="movie-poster"
                        />
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <div className="px-2 sm:px-0 mt-4 sm:mt-6 mb-2 sm:mb-4">
                <Link
                    href={route("movie.upcomings")}
                    className="flex items-center gap-2 w-min whitespace-nowrap"
                >
                    <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold text-2xl sm:text-3xl">
                        Çok Yakında
                    </h1>
                    <LuExternalLink className="w-5 h-5 mt-0.5 text-royal-950 dark:text-FFF2D7" />
                </Link>
            </div>
            <div className="w-full relative max-sm:px-2 sm:mb-20">
                <div className="edge_fade_blur dark:after:bg-fade-dark">
                    <ScrollContainer className="flex gap-4 pt-2">
                        {upComings &&
                            upComings.length > 0 &&
                            upComings
                                .filter((movie) => movie.poster_path)
                                .map((movie, index) => (
                                    <GridMember key={index} movie={movie} />
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
    );
};

export default MovieUpComing;
