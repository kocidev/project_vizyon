import { PageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Header user={auth.user} title="Home" />
            <div className="relative min-h-screen w-full lg:w-5/6 mx-auto">
                Home
            </div>
            <Footer />
        </>
    );
}
