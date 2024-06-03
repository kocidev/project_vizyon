import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { iMovie } from "@/types/movie.type";

import { Title } from "./Partials/Title";
import { SelectTabs } from "./Partials/SelecTabs";
import classNames from "classnames";
import CircularProgressBar from "@/Components/CircularProgressBar";

interface TheaterProps extends PageProps {
    theaters: iMovie[];
}

const Theaters = ({ auth, theaters }: TheaterProps) => {
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
                            {theaters &&
                                theaters.length > 0 &&
                                theaters.map((theater, i) => (
                                    <div
                                        key={i}
                                        className={classNames(
                                            "w-full rounded-3xl relative flex cursor-pointer overflow-hidden items-center justify-center",
                                            "group"
                                        )}
                                    >
                                        <img
                                            className="w-full h-full"
                                            src={`https://image.tmdb.org/t/p/w780/${theater.poster_path}`}
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
                                                {theater.title}
                                            </h1>
                                            <span className="text-sm font-medium text-gray-500">
                                                {theater.release_date}
                                            </span>
                                            <div className="absolute top-0 left-2 -translate-y-1/2 max-sm:hidden">
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <CircularProgressBar
                                                        value={
                                                            theater.vote_average
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <>
                                            <div className="sm:hidden absolute bottom-1 right-1 z-50">
                                                <CircularProgressBar
                                                    value={theater.vote_average}
                                                />
                                            </div>
                                        </>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </CoreLayout>
        </>
    );
};

export default Theaters;
