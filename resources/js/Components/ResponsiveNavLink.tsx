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
                    "text-havuc dark:text-current bg-gray-50 dark:bg-visne/50 border-gray-300 dark:border-visne":
                        active,
                    "text-havuc dark:text-current hover:text-white dark:hover:text-gray-200 hover:bg-havuc/60 dark:hover:bg-visne/60 hover:border-havuc dark:hover:border-visne focus:text-havuc dark:focus:text-current focus:bg-gray-50 dark:focus:bg-visne/50 focus:border-gray-300 dark:focus:border-visne":
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
