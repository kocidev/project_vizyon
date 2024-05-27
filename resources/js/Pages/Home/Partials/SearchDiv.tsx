import TextInput from "@/Components/TextInput";
import { IoSearchSharp } from "react-icons/io5";

const SearchDiv = () => {
    return (
        <div className="h-[32rem] w-full flex gap-4 relative overflow-hidden">
            <div
            id="bg-slide-pic"
                className="absolute w-full h-full top-0 left-0 bg-contain overflow-hidden"
            ></div>
            <div className="absolute w-full h-full top-0 left-0 bg-royal-950/80 dark:bg-copper-rose-950/80"></div>
            <div className="space-y-2 z-50 sm:px-10 pt-20 flex flex-col w-full gap-2">
                <div className="max-sm:text-center w-full space-y-3 mb-28">
                    <h1 className="font-extrabold uppercase text-5xl text-F7F2EB drop-shadow-lg">
                        Hoşgeldin!
                    </h1>
                    <h1 className="font-extrabold uppercase text-3xl text-F7F2EB drop-shadow-lg">
                        İzlenilecek Bir şeyler keşfet
                    </h1>
                </div>
                <div className="flex items-center max-sm:px-10">
                    <TextInput
                        id="search"
                        type="text"
                        name="search"
                        className="w-full sm:w-2/3 py-3 px-4 !ring-0 !outline-none !rounded-l-xl !rounded-r-none !border-none focus:!border-none dark:!bg-copper-rose-800 dark:placeholder:text-white/80"
                        placeholder="Ne izlemek istersin ?"
                    />
                    <button className="p-3 bg-white dark:bg-copper-rose-800 border-l-2 rounded-r-xl dark:border-FFF2D7/50 hover:text-royal-600 dark:hover:text-lotus-500">
                        <IoSearchSharp className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchDiv;
