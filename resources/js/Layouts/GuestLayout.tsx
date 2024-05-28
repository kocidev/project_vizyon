import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import classNames from "classnames";
import { PropsWithChildren } from "react";

export default function Guest({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Header user={undefined} title={title} />
            <div
                className={classNames(
                    "w-full mb-8 mx-auto mt-16",
                    "xl:w-3/5 lg:w-3/4 sm:w-11/12"
                )}
            >
                <div className="w-full h-full relative">{children}</div>
            </div>
            <Footer />
        </>
    );
}
