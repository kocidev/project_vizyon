import { PlatformType } from "@/types/basic.type";
import classNames from "classnames";
import { useState } from "react";

const Platforms = () => {
    const platforms: PlatformType[] = [
        {
            name: "amazon",
            label: "Amazon",
            contents: [],
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
                className="mt-10 w-full bg-dbdbdb dark:bg-111216 h-80 bg-cover bg-no-repeat bg-[center_center] relative"
                style={{
                    backgroundImage: `url(assets/images/platforms/${selectedPlatform.name}/background.jpg)`,
                }}
            >
                <>
                    <div className="absolute inset-0 bg-royal-950/80 dark:bg-black/80 z-0"></div>
                    <div className="absolute right-1 bottom-1">
                        <img
                            width={52}
                            src={`assets/images/platforms/${selectedPlatform.name}/logo.png`}
                            alt="platform-logo"
                        />
                    </div>
                </>
                <div className="flex flex-col w-full h-full z-50 relative px-8 py-4">
                    <div className="flex items-center gap-4">
                        <div className="mr-14">
                            <h1 className="text-lg font-semibold tracking-wide text-white">
                                Platformlar
                            </h1>
                        </div>
                        <div className="flex items-center border rounded-3xl border-royal-500 dark:border-white/30">
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
                </div>
            </div>
        </>
    );
};
export default Platforms;
