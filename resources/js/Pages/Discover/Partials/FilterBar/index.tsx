import Dropdown from "@/Components/Dropdown";
import MultiRangeSlider from "@/Components/MultiRangeSlider";
import SelectMenu from "@/Components/SelectMenu";
import {
    iFilterGenres,
    iFilterOriginalLanguage,
    iFilterSortBy,
} from "@/types/discover.type";
import classNames from "classnames";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const _t_sort_by = (key: iFilterSortBy) => {
    switch (key) {
        case "popularity.asc":
            return "Artan Popülerlik";
        case "popularity.desc":
            return "Azalan Popülerlik";
        case "primary_release_date.asc":
            return "Artan Yayın Tarihi";
        case "primary_release_date.desc":
            return "Azalan Yayın Tarihi";
        case "title.asc":
            return "Başlık (A-Z)";
        case "title.desc":
            return "Başlık (Z-A)";
        case "vote_average.asc":
            return "Artan Oy Ortalaması";
        case "vote_average.desc":
            return "Azalan Oy Ortalaması";
        default:
            return "";
    }
};

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

    const handleChangeFilterValue = (
        value: any,
        dispatch: React.Dispatch<React.SetStateAction<any>>
    ) => {
        dispatch(value);
    };

    const handleChangeFilterVoteAverage = (min: number, max: number) => {
        handleChangeFilterValue(min, setVoteAverageMin);
        handleChangeFilterValue(max, setVoteAverageMax);
    };

    const handleChangeFilterSortBy = (selectedOption: string) => {
        handleChangeFilterValue(selectedOption, setSortBy);
    };

    return (
        <>
            <div className="pr-4 flex flex-col gap-4 w-56">
                <div id="filter_sort_by">
                    <h1 className="font-medium mb-1">Sıralama Ölçütü</h1>
                    <SelectMenu
                        label="Select an option"
                        options={[
                            {
                                label: _t_sort_by("popularity.desc"),
                                value: "popularity.desc",
                            },
                            {
                                label: _t_sort_by("popularity.asc"),
                                value: "popularity.asc",
                            },
                            {
                                label: _t_sort_by("primary_release_date.desc"),
                                value: "primary_release_date.desc",
                            },
                            {
                                label: _t_sort_by("primary_release_date.asc"),
                                value: "primary_release_date.asc",
                            },
                            {
                                label: _t_sort_by("title.desc"),
                                value: "title.desc",
                            },
                            {
                                label: _t_sort_by("title.asc"),
                                value: "title.asc",
                            },
                            {
                                label: _t_sort_by("vote_average.desc"),
                                value: "vote_average.desc",
                            },
                            {
                                label: _t_sort_by("vote_average.asc"),
                                value: "vote_average.asc",
                            },
                        ]}
                        onChange={handleChangeFilterSortBy}
                    />
                </div>
                <div id="filter_vote_average">
                    <h1 className="font-medium mb-1">Puanı</h1>
                    <div className="relative">
                        <MultiRangeSlider
                            min={0}
                            max={10}
                            onChange={({ min, max }) =>
                                handleChangeFilterVoteAverage(min, max)
                            }
                        />
                        <div className="flex justify-between mt-0 text-sm text-gray-500 dark:text-gray-400">
                            <span>0</span>
                            <span>5</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
