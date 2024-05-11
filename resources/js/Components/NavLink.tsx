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
                "border-b border-transparent inline-flex items-center p-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",
                {
                    "text-white dark:text-tFFE0B5": active,
                    "hover:border-b text-white dark:text-tFFE0B5 hover:border-white dark:hover:border-tFFE0B5 focus:border-b focus:text-white dark:focus:text-tFFE0B5 focus:border-white dark:focus:border-tFFE0B5":
                        !active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
