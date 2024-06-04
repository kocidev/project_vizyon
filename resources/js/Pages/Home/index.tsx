import { PageProps } from "@/types";
import { iMovie } from "@/types/movie.type";
import CoreLayout from "@/Layouts/Core";
import Theaters from "@/Pages/Home/Partials/Theaters";
import SearchDiv from "@/Pages/Home/Partials/SearchDiv";
import PlatformContents from "@/Pages/Home/Partials/PlatformContents";
import MovieUpComing from "./Partials/MovieUpComing";
import { iPlatform } from "@/types/platform.type";

interface HomeProps extends PageProps {
    theaters: iMovie[];
    upComings: iMovie[];
    platform: iPlatform;
}

const Home = ({ auth, theaters, upComings, platform }: HomeProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Anasayfa">
                <section id="search-article">
                    <SearchDiv />
                </section>
                <section id="theaters">
                    <Theaters theaters={theaters} />
                </section>
                <section id="up-coming">
                    <MovieUpComing upComings={upComings} />
                </section>
                <section id="platform-contents">
                    <PlatformContents platform={platform} />
                </section>
            </CoreLayout>
        </>
    );
};

export default Home;
