import classNames from "classnames";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Footer() {
    return (
        <footer
            className={classNames(
                "w-full mt-auto p-6 md:p-10",
                "text-sm text-black dark:text-white",
                "border-t-2 border-royal-950 dark:border-lotus-700"
            )}
        >
            <div className="w-full flex items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 pr-1 focus:ring-0 focus:outline-royal-600 dark:focus:outline-lotus-600 focus:rounded-sm"
                >
                    <ApplicationLogo className="block h-9 w-auto fill-royal-950 dark:fill-FFF2D7" />
                    <h1 className="text-royal-950 dark:text-FFF2D7 font-bold">
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                </Link>
                <div className="ml-auto">
                    <a href="https://www.themoviedb.org/" target="_blank">
                        <img
                            className="w-40"
                            src="assets/images/tmdb/alt-long.svg"
                            alt="themoviedatabase"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
