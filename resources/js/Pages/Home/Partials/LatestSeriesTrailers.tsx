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
            <h1>New Series Stories</h1>
            <div>{JSON.stringify(lastSeries)}</div>
        </>
    );
};
export default LatestSeriesTrailers;
