import Loading from "@/Components/Loading";
import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchDiv = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();
        if (isLoading || query.length < 3) return;
        setIsLoading(true);
        const url = route("discover");
        router.visit(url, {
            method: "get",
            data: { s: query },
            onFinish: () => setIsLoading(false),
            onError: () => setIsLoading(false),
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="w-full flex gap-4 relative overflow-hidden px-4 sm:px-10 pt-20 pb-20 sm:pb-40">
            <>
                <div
                    id="bg-slide-pic"
                    className="absolute w-full h-full top-0 left-0 bg-contain overflow-hidden"
                ></div>
                <div className="absolute w-full h-full top-0 left-0 bg-royal-950/80 dark:bg-black/80"></div>
            </>
            <div className="space-y-2 z-50 flex flex-col w-full gap-32">
                <div className="max-sm:text-center w-full space-y-3">
                    <h1 className="font-extrabold text-5xl text-white drop-shadow-lg">
                        Hoş geldiniz !
                    </h1>
                    <h1 className="font-extrabold text-3xl text-white drop-shadow-lg">
                        İzlenilecek Bir şeyler keşfet
                    </h1>
                </div>
                <div className="flex items-center">
                    <TextInput
                        id="search"
                        type="text"
                        name="search"
                        className="w-full sm:w-2/3 py-3 px-4 !ring-0 !outline-none !rounded-l-xl !rounded-r-none !border-none focus:!border-none dark:!bg-lotus-800 dark:placeholder:text-white focus:placeholder:text-transparent dark:focus:placeholder:text-transparent"
                        placeholder="Aklından neler geçiyor ?"
                        autoComplete="off"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={handleSearch}
                        className="p-3 bg-white text-royal-600 dark:text-FFF2D7 dark:!bg-lotus-800 border-l-2 rounded-r-xl dark:border-FFF2D7/50 hover:text-royal-950 dark:hover:text-lotus-500"
                    >
                        {!isLoading ? (
                            <IoSearchSharp className="w-6 h-6" />
                        ) : (
                            <Loading w={24} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchDiv;
