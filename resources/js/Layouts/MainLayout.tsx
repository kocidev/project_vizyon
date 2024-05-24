import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Pages/Home/Partials/Sidebar";
import { User } from "@/types";
import { PropsWithChildren } from "react";

const MainLayout = ({ user, children }: PropsWithChildren<{ user: User }>) => {
    return (
        <>
            <Header user={user} title="Home" />
            <div className="w-full mx-auto lg:w-4/5 xl:w-2/3 mb-8">
                <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4 relative">
                    <Sidebar />
                    <div className="w-full h-full">{children}</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
