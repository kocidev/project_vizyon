import { PageProps } from "@/types";
import CoreLayout from "@/Layouts/Core";
import Theaters from "@/Pages/Home/Partials/Theaters";
import LatestSeriesTrailers from "@/Pages/Home/Partials/LatestSeriesTrailers";
import SearchDiv from "@/Pages/Home/Partials/SearchDiv";
import PlatformContents from "@/Pages/Home/Partials/PlatformContents";
import UpComing from "./Partials/UpComing";

const Home = ({ auth }: PageProps) => {
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
                <section id="platform-contents">
                    <PlatformContents />
                </section>
                <section id="up-coming">
                    <UpComing />
                </section>
            </CoreLayout>
        </>
    );
};

export default Home;
