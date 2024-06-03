import { Link } from "@inertiajs/react";
import classNames from "classnames";

export default function SelectTabs() {
    interface iItem {
        label: string;
        href: string;
    }

    const Items: iItem[] = [
        { label: "Vizyondakiler", href: "movie.theaters" },
        { label: "Çok Yakında", href: "home" },
        { label: "Popüler", href: "home" },
    ];

    return (
        <div className="relative flex items-center">
            <ul
                className="relative flex flex-wrap p-1 list-none rounded bg-shark-200 dark:bg-[#0F0E0E]"
                data-tabs="tabs"
                role="list"
            >
                {Items.map((item, i) => (
                    <li key={i} className="z-30 flex-auto text-center">
                        <Link
                            href={route(item.href)}
                            className={classNames(
                                "w-min",
                                "z-30",
                                "flex items-center justify-center",
                                "px-2 py-1.5",
                                "transition-all ease-in-out",
                                "border-0 rounded-lg",
                                "cursor-pointer",
                                "whitespace-nowrap",
                                {
                                    "bg-royal-950 dark:bg-white text-white dark:text-black":
                                        route().current() == item.href,
                                    "text-gray-600 dark:text-white/80":
                                        route().current() != item.href,
                                }
                            )}
                            data-tab-target=""
                            role="tab"
                            aria-selected="true"
                        >
                            <span className="ml-1 font-medium text-sm">
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
