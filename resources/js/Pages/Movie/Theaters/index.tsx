import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { iMovie } from "@/types/movie.type";

import { Title } from "./Partials/Title";
import { SelectTabs } from "./Partials/SelecTabs";
import classNames from "classnames";

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
                                            "w-full rounded-lg relative flex cursor-pointer",
                                            "hover:scale-105 transition duration-300"
                                        )}
                                    >
                                        <img
                                            className="rounded-3xl"
                                            src={`https://image.tmdb.org/t/p/w780/${theater.poster_path}`}
                                            alt="movie-poster"
                                        />
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
