import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { PropsWithChildren } from "react";

export default function Guest({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Header user={undefined} title={title} />
            <div className="w-full mx-auto lg:w-4/5 xl:w-2/3 mb-8">
                <div className="w-full h-full relative">{children}</div>
            </div>
            <Footer />
        </>
    );
}
