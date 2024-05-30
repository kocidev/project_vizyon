import { PageProps } from "@/types";
import CoreLayout from "@/Layouts/Core";
import Theaters from "@/Pages/Home/Partials/Theaters";
import LatestSeriesTrailers from "@/Pages/Home/Partials/LatestSeriesTrailers";
import SearchDiv from "@/Pages/Home/Partials/SearchDiv";
import Platforms from "@/Pages/Home/Partials/Platforms";

const Home = ({ auth, ziggy }: PageProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Anasayfa">
                <section id="search-article">
                    <SearchDiv />
                </section>
                <section id="theaters">
                    <Theaters />
                </section>
                <section id="latest-series-trailers">
                    <LatestSeriesTrailers />
                </section>
                <section id="platforms">
                    <Platforms />
                </section>
            </CoreLayout>
        </>
    );
};

export default Home;
