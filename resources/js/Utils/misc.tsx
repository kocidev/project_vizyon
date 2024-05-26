import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";

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
