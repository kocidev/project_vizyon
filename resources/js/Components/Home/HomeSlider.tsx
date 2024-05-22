import useData from "@/Hooks/useData";
import { VizyondakiFilmlerType } from "@/types/DataProviderTypes";
import { useEffect, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const HomeSlider = () => {
    const { GetVizyondakiFilmler } = useData();
    const limit = 9;
    const [vizyondakiler, setVizyondakiler] = useState<VizyondakiFilmlerType[]>(
        []
    );
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === limit - 1 ? 1 : prevIndex + 1
        );
    };
    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 1 ? limit - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        GetVizyondakiFilmler(limit).then((theaters) => {
            setVizyondakiler(theaters);
        });
    }, []);

    useEffect(() => {
        const int = setInterval(handleNextSlide, 5000);
        return () => clearInterval(int);
    }, []);

    return (
        <>
            <div
                hidden={vizyondakiler.length < 3}
                className="max-w-[80%] m-[0_auto]"
            >
                <section className="relative overflow-hidden mb-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full py-4 z-10">
                        <button
                            className="bg-havuc/25 dark:bg-visne/25 text-havuc dark:text-visne px-2 rounded z-10 text-xl h-full hover:bg-havuc/50 dark:hover:bg-visne/50"
                            onClick={handlePrevSlide}
                        >
                            <IoChevronForwardSharp className="rotate-180 text-xl" />
                        </button>
                    </div>
                    <div
                        id="slider"
                        className="flex transition-transform gap-4 my-4 justify-center"
                    >
                        <img
                            data-id={currentIndex - 1}
                            className="cursor-pointer transition-all w-full h-[260px] object-cover p-1 inline-block shadow rounded-sm bg-havuc/50 dark:bg-visne/50 hover:scale-105 max-w-[550px]"
                            src={
                                vizyondakiler[currentIndex - 1]?.image ??
                                vizyondakiler[limit - 1]?.image
                            }
                            alt="poster"
                        />
                        <img
                            data-id={currentIndex}
                            className="cursor-pointer transition-all w-full h-[260px] object-cover p-1 inline-block shadow rounded-sm bg-havuc/50 dark:bg-visne/50 hover:scale-105 max-w-[550px]"
                            src={vizyondakiler[currentIndex]?.image}
                            alt="poster"
                        />
                        <img
                            data-id={currentIndex + 1}
                            className="cursor-pointer transition-all w-full h-[260px] object-cover p-1 inline-block shadow rounded-sm bg-havuc/50 dark:bg-visne/50 hover:scale-105 max-w-[550px]"
                            src={
                                vizyondakiler[currentIndex + 1]?.image ??
                                vizyondakiler[0]?.image
                            }
                            alt="poster"
                        />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full py-4 z-10">
                        <button
                            className="bg-havuc/25 dark:bg-visne/25 text-havuc dark:text-visne px-2 rounded z-10 text-xl h-full hover:bg-havuc/50 dark:hover:bg-visne/50"
                            onClick={handleNextSlide}
                        >
                            <IoChevronForwardSharp className="text-xl" />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomeSlider;
