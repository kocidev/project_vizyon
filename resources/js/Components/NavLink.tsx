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
                "focus:outline-none focus:ring-0 transition-[background-color_border-color] hover:bg-havuc/10 dark:hover:bg-visne/25 hover:border-mandalina",
                {
                    "!text-havuc dark:!text-FFF2D7 !border-mandalina dark:!border-vadigulu bg-havuc/10 dark:bg-visne/25":
                        active,
                },
                className
            )}
        >
            {children}
        </Link>
    );
}
