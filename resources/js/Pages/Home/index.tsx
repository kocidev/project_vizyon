import { PageProps } from "@/types";
import CoreLayout from "@/Layouts/Core";
import Theaters from "@/Pages/Home/Partials/Theaters";
import SearchDiv from "@/Pages/Home/Partials/SearchDiv";
import PlatformContents from "@/Pages/Home/Partials/PlatformContents";
import MovieUpComing from "./Partials/MovieUpComing";
import { iMovie } from "@/types/movie.type";
import ScrollToTopButton from "@/Components/ScrollToTop";

interface HomeProps extends PageProps {
    theaters: iMovie[];
    upComings: iMovie[];
}

const Home = ({ auth, theaters, upComings }: HomeProps) => {
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
                    <PlatformContents />
                </section>
            </CoreLayout>
        </>
    );
};

export default Home;
