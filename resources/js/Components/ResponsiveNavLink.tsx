import { Link, InertiaLinkProps } from "@inertiajs/react";
import classNames from "classnames";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={classNames(
                "w-full flex items-start ps-3 pe-4 py-2 border-l-2 text-sm",
                {
                    "border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":
                        active,
                    "text-gray-600 dark:text-tFFF2D7 hover:text-white dark:hover:text-gray-200 hover:bg-havuc dark:hover:bg-visne/60 hover:border-havuc dark:hover:border-visne focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600":
                        !active,
                },
                "text-base font-medium focus:outline-none transition duration-150 ease-in-out",
                className
            )}
        >
            {children}
        </Link>
    );
}
