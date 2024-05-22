import { PageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HomeSideBar from "@/Components/Home/HomeSiderBar";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Header user={auth.user} title="Home" />
            <div className="relative w-full lg:w-5/6 lg:mx-auto mb-8">
                <div className="w-full flex gap-4 h-full">
                    <HomeSideBar />
                    <div>
                        <div>1</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
