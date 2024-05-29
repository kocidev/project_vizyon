import ScrollContainer from "@/Components/ScrollContainer";
import { PlatformType } from "@/types/basic.type";
import classNames from "classnames";
import { useState } from "react";

const Platforms = () => {
    const platforms: PlatformType[] = [
        {
            name: "amazon",
            label: "Amazon",
            contents: [
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
                {
                    name: "Lorem Ipsum Lore",
                    description: "Lorem Ipsum Lore Lorem Ipsum",
                    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e2499817c466504601f8619bd55d268645b3a614b4f2fecc17d77eafdc1c2857._RI_TTW_SX1080_FMjpg_.jpg",
                    link: "",
                    type: "movie",
                },
            ],
        },
        {
            name: "netflix",
            label: "Netflix",
            contents: [],
        },
        {
            name: "disney",
            label: "Disney+",
            contents: [],
        },
        {
            name: "apple",
            label: "Apple+",
            contents: [],
        },
    ];

    const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>({
        name: "amazon",
        label: "Amazon",
        contents: [],
    });

    return (
        <>
            <div
                className={classNames(
                    "relative",
                    "w-full min-h-80",
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
                    <div className="absolute right-1 bottom-1">
                        <img
                            width={52}
                            src={`assets/images/platforms/${selectedPlatform.name}/logo.png`}
                            alt="platform-logo"
                        />
                    </div>
                </>
                <div className="flex flex-col w-full h-full z-50 relative pl-8 py-4 justify-between">
                    <div className="flex max-md:flex-col md:items-center gap-4 pr-4">
                        <div className="lg:mr-14">
                            <h1 className="text-xl font-semibold tracking-wide text-white">
                                Son Zamanlarda {selectedPlatform.label}
                            </h1>
                        </div>
                        <div className="z-[100] w-min overflow-auto scrollbar-hide flex items-center border rounded-3xl border-royal-500 dark:border-white/30">
                            {platforms.map((platform, i) => (
                                <div
                                    key={i}
                                    onClick={() =>
                                        setSelectedPlatform(platform)
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
                        <div className="mt-6">
                            <div className="edge_fade_blur after:bg-fade-royal dark:after:bg-fade-dark">
                                <div className="w-full overflow-auto">
                                    <div className="flex gap-4 items-center overflow-auto pr-8 pb-8">
                                        {selectedPlatform.contents.map(
                                            (content, i) => (
                                                <div key={i}>
                                                    <div className="w-72">
                                                        <img
                                                            className="rounded-lg shadow"
                                                            src={content.image}
                                                            alt="platform-content-image"
                                                        />
                                                    </div>
                                                    <div className="text-center mt-2 text-white dark:text-current">
                                                        <h1 className="text-xl font-semibold">
                                                            {content.name}
                                                        </h1>
                                                        <h1 className="font-medium">
                                                            {
                                                                content.description
                                                            }
                                                        </h1>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Platforms;
