import useData from "@/Hooks/useData";
import { UpComingSerieTypes } from "@/types/DataProviderTypes";
import { useEffect, useState } from "react";

const LatestSeriesTrailers = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { GetUpComingSeries } = useData();
    const [lastSeries, setLastSeries] = useState<UpComingSerieTypes[]>([]);

    useEffect(() => {
        GetUpComingSeries().then((series) => {
            setLastSeries(series);
            setIsLoading(false);
        });
    }, []);

    return (
        !isLoading && (
            <>
                <div className="flex flex-col mb-2 gap-2">
                    <div className="max-sm:px-2 max-sm:pt-2">
                        <h1 className="text-royal-950 dark:text-FFF2D7 drop-shadow-sm font-extrabold py-4 sm:text-4xl text-2xl">
                            Gelecek Diziler Ve Sezonlar
                        </h1>
                    </div>
                    <div>1</div>
                </div>
            </>
        )
    );
};
export default LatestSeriesTrailers;
