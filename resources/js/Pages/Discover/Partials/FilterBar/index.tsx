import Dropdown from "@/Components/Dropdown";
import {
    iFilterGenres,
    iFilterOriginalLanguage,
    iFilterSortBy,
} from "@/types/discover.type";
import classNames from "classnames";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterBar = () => {
    const [sort_by, setSortBy] = useState<iFilterSortBy>("popularity.desc");

    const [primary_release_date_year_min, setPrimaryReleaseDateYearMin] =
        useState<number | null>(null);
    const [primary_release_date_year_max, setPrimaryReleaseDateYearMax] =
        useState<number | null>(null);

    const [with_genres, setWithGenres] = useState<iFilterGenres[]>([]);

    const [with_original_language, setWithOriginalLanguage] = useState<
        iFilterOriginalLanguage[]
    >([]);

    const [vote_average_min, setVoteAverageMin] = useState<number>(0);
    const [vote_average_max, setVoteAverageMax] = useState<number>(10);

    return (
        <>
            <div className="pr-4 flex flex-col gap-4 w-56">
                <div className="sorting">
                    <h1 className="font-medium mb-1">Sıralama Ölçütü</h1>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                className={classNames(
                                    "w-full",
                                    "flex items-center justify-between",
                                    "py-1.5 px-2.5",
                                    "rounded bg-gray-300 dark:bg-0F0E0E",
                                    "border border-gray-300 dark:border-0F0E0E"
                                )}
                            >
                                <div className="whitespace-nowrap overflow-hidden">
                                    <h1 className="dark:text-white text-sm overflow-hidden text-ellipsis">
                                        Azalan Popülerlik
                                    </h1>
                                </div>
                                <div>
                                    <IoMdArrowDropdown className="dark:text-white/60" />
                                </div>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content align="left" width="w-full">
                            <button className="w-full text-start p-1 px-2 dark:text-white hover:text-white hover:bg-royal-950 dark:hover:bg-lotus-700">
                                <h1>Azalan Popülerlik</h1>
                            </button>
                            <button className="w-full text-start p-1 px-2 dark:text-white hover:text-white hover:bg-royal-950 dark:hover:bg-lotus-700">
                                <h1>Artan Popülerlik</h1>
                            </button>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
