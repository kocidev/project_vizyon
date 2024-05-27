import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";

type ItemType = {
    href: string;
    icon: React.ElementType;
    label: string;
    isMobile?: boolean;
};

export const SideBarItems: ItemType[] = [
    {
        href: "home",
        label: "Anasayfa",
        icon: IoMdHome,
        isMobile: true,
    },
    {
        href: "#",
        icon: RiCompassDiscoverLine,
        label: "Filmler",
    },
    {
        href: "#",
        icon: RiCompassDiscoverLine,
        label: "Diziler",
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
        isMobile: true,
    },
    {
        href: "#",
        icon: MdMessage,
        label: "Tartışma",
    },
];
