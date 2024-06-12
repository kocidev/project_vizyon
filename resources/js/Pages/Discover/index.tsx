import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { FilterBar, ShowList } from "@/Pages/Discover/Partials";
import TextInput from "@/Components/TextInput";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { iFilterKeys, iShow } from "@/types/discover.type";
import { DiscoverNewThings, SearchNewThings } from "@/Services/Discover";
import classNames from "classnames";
import LoadingDot from "@/Components/LoadingDot";
import {
    deepEqual,
    genreIdsToNamesForMovies,
    genreIdsToNamesForTV,
    getLanguageInTurkish,
} from "@/Utils/misc";
import Modal from "@/Components/Modal";

interface DiscoverProps extends PageProps {
    shows: iShow[];
}

const Discover = ({ auth, shows }: DiscoverProps) => {
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isMoreLoading, setMoreIsLoading] = useState<boolean>(false);
    const [isDiff, setIsDiff] = useState<boolean>(false);
    const [selectedShow, setSelectedShow] = useState<iShow>({} as iShow);
    const [isModalShow, setIsModalShow] = useState<boolean>(false);

    const FIRST_VALUES: iFilterKeys = {
        show_type: "movie",
        sort_by: "popularity.desc",
        primary_release_date_year_min: 1900,
        primary_release_date_year_max: 2024,
        with_genres: [] as number[],
        vote_average_min: 0,
        vote_average_max: 10,
        with_original_language: undefined,
    };

    const [FilterValues, setFilterValues] = useState<iFilterKeys>(FIRST_VALUES);

    const [lastFilters, setLastFilters] = useState<iFilterKeys>(FIRST_VALUES);

    const [Shows, setShows] = useState<iShow[]>(shows);

    const [searchQuery, setSearchQuery] = useState<string>(
        (route().params?.s as string) || ""
    );

    useEffect(() => {
        if (lastFilters && FilterValues) {
            setIsDiff(!deepEqual(lastFilters, FilterValues));
        }
    }, [lastFilters, FilterValues]);

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();
        if (query.length < 3) return;
        setIsLoading(true);
        SearchNewThings(FilterValues.show_type, query, 1)
            .then((newShows) => {
                setShows(newShows);
            })
            .finally(() => setIsLoading(false));
    };

    const handleSubmit = () => {
        setLastFilters(FilterValues);
        setIsLoading(true);
        DiscoverNewThings(FilterValues, 1)
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
        if (searchQuery.trim().toLowerCase().length >= 3) {
            SearchNewThings(
                FilterValues.show_type,
                searchQuery.trim().toLowerCase(),
                newPage
            )
                .then((newShows) => {
                    setShows(newShows);
                })
                .finally(() => setMoreIsLoading(false));
        } else {
            DiscoverNewThings(FilterValues, newPage)
                .then((newShows) => {
                    setShows((prevShows) => [...prevShows, ...newShows]);
                    setPage((prevPage) => prevPage + 1);
                })
                .finally(() => setMoreIsLoading(false));
        }
    };

    const handleOnSelectShow = (show: iShow) => {
        setSelectedShow(show);
        setIsModalShow((p) => !p);
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
                                    className="border-2 border-gray-200 w-96 py-2.5 px-4 rounded-xl mr-2 dark:bg-shark-950 dark:placeholder:text-white focus:placeholder:text-transparent dark:focus:placeholder:text-transparent"
                                    placeholder="Aklında ki içerik ?"
                                    autoComplete="off"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <button
                                    onClick={handleSearch}
                                    className="p-2.5 bg-white dark:text-white dark:bg-shark-950 border-2 border-gray-200 rounded-xl dark:border-gray-700 text-indigo-500 hover:border-indigo-500 dark:hover:border-indigo-500"
                                >
                                    <IoSearchSharp className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="border-r border-gray-200 dark:border-white/5 pt-4 max-xl:px-6 pr-8">
                            <FilterBar onChange={setFilterValues} />
                        </div>
                        <div className="ml-8 flex-1">
                            <ShowList
                                isLoading={isLoading}
                                shows={Shows}
                                onSelect={handleOnSelectShow}
                            />
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
                        {isDiff && (
                            <div className="fixed bottom-0 left-0 w-full bg-indigo-500 dark:bg-shark-950 shadow z-10 opacity-25 hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={handleSubmit}
                                    className="flex items-center justify-center w-full py-4"
                                >
                                    <h1 className="text-white text-xl font-extrabold uppercase">
                                        Ara
                                    </h1>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {selectedShow && (
                    <Modal
                        closeable
                        show={isModalShow}
                        onClose={() => setIsModalShow(false)}
                        className="max-w-2xl"
                    >
                        <div className="w-full h-full flex">
                            <div className="min-w-60 max-w-60 w-full overflow-hidden shadow">
                                <img
                                    className={
                                        "h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px]"
                                    }
                                    src={`https://image.tmdb.org/t/p/w780/${selectedShow?.poster_path}`}
                                    alt="movie-poster"
                                />
                            </div>
                            <div className="py-2 flex flex-col gap-1 relative w-full">
                                <div className="ml-2 ">
                                    <button className="font-extrabold dark:text-white text-start">
                                        {selectedShow.title ||
                                            selectedShow.name}
                                    </button>
                                </div>
                                <div className="ml-2 flex items-center dark:text-white text-sm">
                                    <h1 className="text-gray-500 mr-1">Tür:</h1>
                                    <h1>
                                        {selectedShow.title
                                            ? genreIdsToNamesForMovies(
                                                  selectedShow.genre_ids
                                              )
                                            : genreIdsToNamesForTV(
                                                  selectedShow.genre_ids
                                              )}
                                    </h1>
                                </div>
                                <div className="ml-2 flex items-center dark:text-white text-sm">
                                    <h1 className="text-gray-500 mr-1">
                                        Orijinal Dil:
                                    </h1>
                                    <h1>
                                        {getLanguageInTurkish(
                                            selectedShow.original_language
                                        )}
                                    </h1>
                                </div>
                                <div className="ml-2 mt-auto flex items-center dark:text-white text-sm font-medium z-10">
                                    <h1 className="text-gray-500 mr-1">
                                        Yayın Tarihi:
                                    </h1>
                                    <h1>
                                        {selectedShow.release_date ||
                                            selectedShow.first_air_date}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </CoreLayout>
        </>
    );
};

export default Discover;
