import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Footer() {
    return (
        <footer className="mt-auto p-16 text-sm text-black dark:text-white border-t border-havuc dark:border-visne">
            <div className="w-full flex items-center">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-white dark:text-tFFF2D7" />
                        <h1 className="text-white dark:text-tFFF2D7 font-semibold">
                            {import.meta.env.VITE_APP_NAME}
                        </h1>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
