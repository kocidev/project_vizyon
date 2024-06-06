import Dropdown from "@/Components/Dropdown";
import classNames from "classnames";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterBar = () => {
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
                            <div className="p-1 px-2 dark:text-white hover:bg-royal-950 dark:hover:bg-lotus-700">
                                <h1>Azalan Popülerlik</h1>
                            </div>
                            <div className="p-1 px-2 dark:text-white">
                                <h1>Artan Popülerlik</h1>
                            </div>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
