import NavLink from "../../../Components/NavLink";
import { IoMdHome } from "react-icons/io";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

type ItemType = {
    href: string;
    icon: React.ElementType;
    label: string;
};

const Items: ItemType[] = [
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
            <div className="min-w-40 max-w-40 lg:min-w-48 lg:max-w-48 border-gray-300 dark:border-1e2029 pb-10 hidden sm:block">
                <div className="flex flex-col">
                    {Items.map((item, i) => (
                        <NavLink
                            key={i}
                            href={
                                item.href != "#" ? route(item.href) : item.href
                            }
                            as="button"
                            className="w-full p-1.5 px-4 border-r-2 border-gray-300 text-mandalina dark:text-FFF2D7 dark:border-1e2029 dark:hover:border-vadigulu"
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
