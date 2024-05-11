import { PageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HomeSlider from "@/Components/Home/HomeSlider";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Header user={auth.user} title="Home" />
            <div className="relative w-full lg:w-5/6 mx-auto">
                <div>
                    <HomeSlider />
                </div>
            </div>
            <Footer />
        </>
    );
}
