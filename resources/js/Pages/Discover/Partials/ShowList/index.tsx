import CircularProgressBar from "@/Components/CircularProgressBar";
import LazyLoadedImage from "@/Components/LazyLoadedImage";
import LoadingDot from "@/Components/LoadingDot";
import { iMovie } from "@/types/movie.type";
import { iSeries } from "@/types/series.type";
import classNames from "classnames";
import { IoIosStats } from "react-icons/io";

type ShowListProps = {
    isLoading: boolean;
    shows: iMovie[] & iSeries[];
};

const ShowList = ({ isLoading, shows }: ShowListProps) => {
    return (
        <>
            <div className="mt-4">
                <>
                    {isLoading && (
                        <div className="flex items-center justify-center w-full mt-16">
                            <LoadingDot />
                        </div>
                    )}
                </>
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                        {!isLoading &&
                            shows &&
                            shows.length > 0 &&
                            shows.map((show, i) => (
                                <div
                                    key={i}
                                    className={classNames(
                                        "w-full rounded-3xl relative flex cursor-pointer overflow-hidden items-center justify-center",
                                        "group shadow"
                                    )}
                                >
                                    <LazyLoadedImage
                                        skeletonClassName={
                                            "h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px]"
                                        }
                                        className="w-full h-full"
                                        src={`https://image.tmdb.org/t/p/w780/${show.poster_path}`}
                                        alt="movie-poster"
                                        isExist={!!show.poster_path}
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
                                            {show.title}
                                        </h1>
                                        <span className="text-sm font-medium text-gray-500">
                                            {show.release_date}
                                        </span>
                                        <div className="absolute top-0 left-0 -translate-y-1/2 max-sm:hidden w-full">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                                                <div>
                                                    <CircularProgressBar
                                                        value={
                                                            show.vote_average
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </>
            </div>
        </>
    );
};
export default ShowList;
