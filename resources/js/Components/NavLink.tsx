import { Link, InertiaLinkProps } from "@inertiajs/react";
import classNames from "classnames";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={classNames(
                "border-l-2 border-transparent inline-flex items-center p-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",
                {
                    "text-gray-900 dark:text-white": active,
                    "hover:border-l-2 text-gray-500 dark:text-tFFE0B5 hover:text-gray-700 dark:hover:text-tFFE0B5 hover:border-gray-300 dark:hover:border-tFFE0B5 focus:border-l-2 focus:text-gray-700 dark:focus:text-tFFE0B5 focus:border-gray-300 dark:focus:border-tFFE0B5":
                        !active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
