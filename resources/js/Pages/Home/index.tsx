import { PageProps } from "@/types";
import CoreLayout from "@/Layouts/Core";
import Theaters from "./Partials/Theaters";
import LatestSeriesTrailers from "./Partials/LatestSeriesTrailers";
import SearchDiv from "./Partials/SearchDiv";
import Platforms from "./Partials/Platforms";

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
