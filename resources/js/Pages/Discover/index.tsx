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

interface iShow extends iMovie, iSeries {}

const Discover = ({ auth }: PageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [lastFilters, setLastFilters] = useState<iFilterKeys>({
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

    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler" big>
                <div className="w-full h-full flex flex-col mt-8">
                    <div className="w-full border-b pb-8 max-xl:px-6 border-gray-200 dark:border-white/5">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-7xl font-extrabold tracking-wide">
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
                        </div>
                    </div>
                </div>
            </CoreLayout>
        </>
    );
};

export default Discover;
