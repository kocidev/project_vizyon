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
                    "text-royal-700 dark:text-current bg-gray-50 dark:bg-lotus-700/50 border-gray-300 dark:border-lotus-700":
                        active,
                    "text-royal-700 dark:text-current hover:text-white dark:hover:text-gray-200 hover:bg-royal-700/60 dark:hover:bg-lotus-700/60 hover:border-royal-700 dark:hover:border-lotus-700 focus:text-royal-700 dark:focus:text-current focus:bg-gray-50 dark:focus:bg-lotus-700/50 focus:border-gray-300 dark:focus:border-lotus-700":
                        !active,
                },
                "text-base font-medium focus:outline-none transition-none",
                className
            )}
        >
            {children}
        </Link>
    );
}
