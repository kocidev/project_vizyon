import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { FilterBar, ShowList } from "@/Pages/Discover/Partials";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { iMovie } from "@/types/movie.type";
import { iSeries } from "@/types/series.type";
import { iFilterKeys } from "@/types/discover.type";
import { FindNewThings } from "@/Services/Discover";
import classNames from "classnames";
import LoadingDot from "@/Components/LoadingDot";

interface iShow extends iMovie, iSeries {}

const Discover = ({ auth }: PageProps) => {
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isMoreLoading, setMoreIsLoading] = useState<boolean>(false);

    const [_, setLastFilters] = useState<iFilterKeys>({
        show_type: "movie",
        sort_by: "popularity.desc",
    } as iFilterKeys);

    const [Shows, setShows] = useState<iShow[]>([]);

    const [searchQuery, setSearchQuery] = useState<string>(
        route().params?.s as string
    );

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();
        if (query.length < 3) return;
        // TODO api isteği at ve filmleri çek.
    };

    const handleSubmit = (filter: iFilterKeys) => {
        setLastFilters(filter);
        setIsLoading(true);
        FindNewThings(filter, 1)
            .then((newShows) => {
                setShows(newShows);
            })
            .finally(() => setIsLoading(false));
    };

    const handleClickMore = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newPage = page + 1;
        if (newPage > 10) return;
        setMoreIsLoading(true);
        // TODO api isteği at ve filmleri çek.
    };

    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler" big>
                <div className="w-full h-full flex flex-col mt-8">
                    <div className="w-full border-b pb-8 max-xl:px-6 border-gray-200 dark:border-white/5">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-7xl font-extrabold tracking-wide select-none">
                                Keşfet
                            </h1>
                            <div className="flex items-center max-sm:hidden">
                                <TextInput
                                    id="search"
                                    type="text"
                                    name="search"
                                    className="w-96 py-3 px-4 rounded-xl mr-2 dark:bg-shark-950 dark:placeholder:text-white focus:placeholder:text-transparent dark:focus:placeholder:text-transparent"
                                    placeholder="Aklında ki içerik?"
                                    autoComplete="off"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <button
                                    onClick={handleSearch}
                                    className="p-3 bg-white text-royal-600 dark:text-white dark:bg-shark-950 border rounded-xl dark:border-gray-700 hover:text-royal-950 dark:hover:text-lotus-500"
                                >
                                    <IoSearchSharp className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="border-r pt-4 max-xl:px-6 pr-8">
                            <FilterBar onSubmit={handleSubmit} />
                        </div>
                        <div className="ml-8 flex-1">
                            <ShowList isLoading={isLoading} shows={Shows} />
                            <div
                                className={classNames("mt-16", {
                                    flex: !isLoading,
                                    hidden: isLoading,
                                })}
                            >
                                {!isMoreLoading ? (
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
                </div>
            </CoreLayout>
        </>
    );
};

export default Discover;
