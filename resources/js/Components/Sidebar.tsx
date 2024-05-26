import NavLink from "./NavLink";
import { IoMdHome } from "react-icons/io";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

type ItemType = {
    href: string;
    icon: React.ElementType;
    label: string;
};

export const SideBarItems: ItemType[] = [
    {
        href: "home",
        icon: IoMdHome,
        label: "Anasayfa",
    },
    {
        href: "#",
        icon: RiCompassDiscoverLine,
        label: "Keşfet",
    },
    {
        href: "#",
        icon: FaArrowTrendUp,
        label: "Trendler",
    },
    {
        href: "#",
        icon: MdMessage,
        label: "Tartışmalar",
    },
];

const Sidebar = () => {
    return (
        <>
            <div className="max-sm:hidden min-w-40 max-w-40 lg:min-w-48 lg:max-w-48 max-sm:z-10 max-sm:bg-F7F2EB dark:max-sm:bg-111216 h-full">
                <div className="flex flex-col border-gray-300 dark:border-shark-950">
                    {SideBarItems.map((item, i) => (
                        <NavLink
                            key={i}
                            href={
                                item.href != "#" ? route(item.href) : item.href
                            }
                            as="button"
                            className="w-full p-1.5 px-4 border-r-2 border-gray-300 text-danube-500 dark:text-FFF2D7 dark:border-shark-950 dark:hover:border-copper-rose-600"
                            active={route().current(item.href)}
                        >
                            <h1 className="whitespace-nowrap text-start font-bold text-ellipsis overflow-hidden flex items-center gap-2">
                                <item.icon className="text-lg" />
                                <span>{item.label}</span>
                            </h1>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
