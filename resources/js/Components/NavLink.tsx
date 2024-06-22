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
                "outline-none focus:ring-0 transition-[background-color,border-color] hover:bg-royal-950/10 dark:hover:bg-lotus-700/25 hover:border-royal-950",
                {
                    "!text-royal-950 dark:!text-FFF2D7 !border-royal-950 dark:!border-copper-rose-600 bg-royal-950/10 dark:bg-lotus-700/25":
                        active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
