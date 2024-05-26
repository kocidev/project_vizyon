import useData from "@/Hooks/useData";
import { UpComingSerieTypes } from "@/types/DataProviderTypes";
import { useEffect, useState } from "react";

const LatestSeriesTrailers = () => {
    const { GetUpComingSeries } = useData();
    const [lastSeries, setLastSeries] = useState<UpComingSerieTypes[]>([]);

    useEffect(() => {
        GetUpComingSeries().then((series) => {
            setLastSeries(series);
        });
    }, []);

    return (
        <>
            <div className="flex items-center mb-2">
                <h1 className="dark:text-current text-xl mb-2 max-sm:px-2 max-sm:pt-2">
                    Gelecek Diziler Ve Sezonlar
                </h1>
            </div>
        </>
    );
};
export default LatestSeriesTrailers;
