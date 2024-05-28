import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import Theaters from "./Partials/Theaters";
import LatestSeriesTrailers from "./Partials/LatestSeriesTrailers";
import SearchDiv from "./Partials/SearchDiv";

const Home = ({ auth }: PageProps) => {
    return (
        <>
            <MainLayout user={auth.user} title="Anasayfa">
                <SearchDiv />
                <div id="theaters">
                    <Theaters />
                </div>
                <div id="latest-series-trailers">
                    <LatestSeriesTrailers />
                </div>
            </MainLayout>
        </>
    );
};

export default Home;
