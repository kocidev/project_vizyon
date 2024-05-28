import App from "@/Components/App";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { User } from "@/types";
import classNames from "classnames";
import { PropsWithChildren } from "react";

const MainLayout = ({
    user,
    title,
    children,
}: PropsWithChildren<{ user?: User; title: string }>) => {
    return (
        <App>
            <Header user={user} title={title} />
            <div
                className={classNames(
                    "w-full mb-8 mx-auto mt-16",
                    "xl:w-3/5 lg:w-3/4 sm:w-11/12"
                )}
            >
                <div className="w-full h-full">{children}</div>
            </div>
            <Footer />
        </App>
    );
};

export default MainLayout;
