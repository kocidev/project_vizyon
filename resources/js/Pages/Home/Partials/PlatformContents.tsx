import LazyLoadedImage from "@/Components/LazyLoadedImage";
import { GetPlatformContent } from "@/Services/Platforms";
import { PlatformType } from "@/types/basic.type";
import classNames from "classnames";
import { useEffect, useState } from "react";

type tExtraPlatformType = PlatformType & { isLoad: boolean };

const PlatformContents = () => {
    const [Platforms, setPlatforms] = useState<tExtraPlatformType[]>([
        { name: "amazon", label: "Amazon", contents: [], isLoad: false },
        { name: "netflix", label: "Netflix", contents: [], isLoad: false },
        { name: "disney", label: "Disney+", contents: [], isLoad: false },
        { name: "apple", label: "AppleTV", contents: [], isLoad: false },
    ]);

    const [selectedPlatform, setSelectedPlatform] =
        useState<tExtraPlatformType>(Platforms[0]);

    useEffect(() => {
        if (!selectedPlatform.isLoad) {
            GetPlatformContent(selectedPlatform.name).then((response) => {
                setSelectedPlatform((prevPlatform) => ({
                    ...prevPlatform,
                    contents: response,
                }));
            });
        }
    }, []);

    const handleChangePlatform = async (platformName: string) => {
        const platform = Platforms.find((p) => p.name === platformName);
        if (platform) {
            setSelectedPlatform(platform);
            if (!platform.isLoad) {
                const response = await GetPlatformContent(platform.name);
                const updatedPlatform = {
                    ...platform,
                    contents: response,
                    isLoad: true,
                };
                setPlatforms((prevPlatforms) =>
                    prevPlatforms.map((p) =>
                        p.name === platformName ? updatedPlatform : p
                    )
                );
                setSelectedPlatform(updatedPlatform);
            }
        }
    };

    return (
        <>
            <div
                className={classNames(
                    "relative",
                    "w-full",
                    "animate-fade-in",
                    "mt-10",
                    "bg-dbdbdb dark:bg-111216",
                    "bg-cover bg-no-repeat transition-[background] bg-[center_center]"
                )}
                style={{
                    backgroundImage: `url(assets/images/platforms/${selectedPlatform.name}/background.jpg)`,
                }}
            >
                <>
                    <div className="absolute inset-0 bg-royal-950/80 dark:bg-black/80 z-10"></div>
                    <div className="absolute right-10 bottom-2">
                        <img
                            width={52}
                            src={`assets/images/platforms/${selectedPlatform.name}/logo.png`}
                            alt="platform-logo"
                        />
                    </div>
                </>
                <div className="relative w-full z-50 pl-8 py-4 flex flex-col justify-between min-h-[22rem]">
                    <div className="flex max-md:flex-col md:items-center gap-4 pr-4">
                        <div className="lg:mr-14">
                            <h1 className="text-xl font-semibold tracking-wide text-white">
                                Son Zamanlarda {selectedPlatform.label}
                            </h1>
                        </div>
                        <div className="z-[100] w-min overflow-auto scrollbar-hide flex items-center border rounded-3xl border-royal-500 dark:border-white/30">
                            {Platforms.map((platform, i) => (
                                <div
                                    key={i}
                                    onClick={() =>
                                        handleChangePlatform(platform.name)
                                    }
                                    className={classNames(
                                        "px-4 py-0.5 rounded-3xl cursor-pointer",
                                        "transition-colors",
                                        {
                                            "bg-linear-3 dark:bg-linear-1":
                                                selectedPlatform.name ==
                                                platform.name,
                                        }
                                    )}
                                >
                                    <h1 className="font-semibold tracking-wide text-white">
                                        {platform.label}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    {selectedPlatform.contents.length > 0 && (
                        <div className="edge_fade_blur after:bg-fade-royal dark:after:bg-fade-dark mt-4">
                            <div className="w-full overflow-auto">
                                <div className="flex gap-4 items-center overflow-auto pr-8 sm:pb-6 max-sm:scrollbar-hide">
                                    {selectedPlatform.contents.map(
                                        (content, i) => (
                                            <div key={i}>
                                                <div className="w-72">
                                                    <LazyLoadedImage
                                                        src={content.image}
                                                        alt="platform-content-image"
                                                        imgClassName="rounded-lg shadow"
                                                        skeletonClassName="h-[160px]"
                                                    />
                                                </div>
                                                <div className="text-center mt-2 text-white dark:text-current">
                                                    <h1 className="text-xl font-semibold">
                                                        {content.name}
                                                    </h1>
                                                    <h1 className="font-medium">
                                                        {content.description}
                                                    </h1>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default PlatformContents;
