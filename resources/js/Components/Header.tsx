import "../../css/header.css";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import Dropdown from "./Dropdown";
import ResponsiveNavLink from "./ResponsiveNavLink";
import NavLink from "./NavLink";
import { FaSearch } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import useData from "@/Hooks/useData";
import { SideBarItems } from "@/Pages/Home/Partials/Sidebar";

export default function Header({
    user,
    title,
}: {
    user?: User;
    title: string;
}) {
    const { isDark, setIsDark } = useData();
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const MobileMenuButton = () => (
        <button
            onClick={() =>
                setShowingNavigationDropdown(!showingNavigationDropdown)
            }
            className="inline-flex items-center justify-center rounded text-white dark:text-FFF2D7 focus:outline-none hover:bg-white/20 dark:hover:bg-white/10 focus:text-white dark:focus:text-FFF2D7 sm:transition"
        >
            <HiMiniBars3BottomRight
                className={classNames("w-6 h-6", {
                    hidden: showingNavigationDropdown,
                    "inline-flex": !showingNavigationDropdown,
                })}
            />
            <IoCloseOutline
                className={classNames("w-6 h-6", {
                    hidden: !showingNavigationDropdown,
                    "inline-flex": showingNavigationDropdown,
                })}
            />
        </button>
    );

    return (
        <>
            <Head title={title} />
            <header className="w-full lg:mb-4 lg:my-4 lg:w-4/5 xl:w-2/3 lg:rounded mx-auto p-4 bg-royal-700 flex items-center dark:bg-lotus-700 z-[999]">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <ApplicationLogo className="block h-9 w-auto fill-F7F2EB dark:fill-FFF2D7" />
                        <h1 className="text-F7F2EB dark:text-FFF2D7 font-typold-extended font-bold">
                            {import.meta.env.VITE_APP_NAME}
                        </h1>
                    </Link>
                </div>
                <div className="ml-auto flex items-center gap-2 w-min whitespace-nowrap">
                    <div className="flex gap-4 items-center">
                        <div className="w-fit h-fit relative search-box hidden lg:block">
                            <button className="btn-search absolute flex items-center p-1.5 rounded-full top-1/2 -translate-y-1/2 right-0">
                                <FaSearch className="text-white dark:text-current" />
                            </button>
                            <input
                                className="text-white dark:text-F7F2EB w-0 h-8 input-search border-none tracking-widest outline-none transition duration-500 pr-8 text-xs ring-0 focus:outline-none focus:ring-0 placeholder:text-sky dark:placeholder:text-F7F2EB bg-transparent"
                                type="text"
                                name="search-bar"
                                id="search-bar"
                                placeholder="Aradığınız film..."
                            />
                        </div>
                        <button
                            className="w-5 group"
                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? (
                                <MdDarkMode className="text-white dark:text-current w-full h-full transition-transform duration-[1.5s] group-hover:rotate-[360deg] group-focus:rotate-[360deg]" />
                            ) : (
                                <MdLightMode className="text-white dark:text-FFF2D7 w-full h-full transition-transform duration-[1.5s] group-hover:rotate-180 group-focus:rotate-180" />
                            )}
                        </button>
                    </div>
                    {user && (
                        <div className="hidden sm:flex sm:items-center ms-2">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white dark:text-FFF2D7 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}
                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            <div className="flex items-center gap-1">
                                                <FaUser className="w-4 h-4" />
                                                <h1>Profil</h1>
                                            </div>
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            <div className="flex items-center gap-1">
                                                <FiLogOut className="h-4 w-4" />
                                                <h1>Çıkış yap</h1>
                                            </div>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    )}
                    {!user && (
                        <div className="hidden sm:flex items-center gap-2 ml-4">
                            <NavLink
                                as="button"
                                href={route("login")}
                                className="!text-white dark:!text-FFF2D7 !border-white dark:!border-FFF2D7 hover:border-b focus:border-b"
                            >
                                <h1 className="font-typold-extended text-sm">
                                    Giriş yap
                                </h1>
                            </NavLink>
                            <NavLink
                                as="button"
                                href={route("register")}
                                className="!text-white dark:!text-FFF2D7 !border-white dark:!border-FFF2D7 hover:border-b focus:border-b"
                            >
                                <h1 className="font-typold-extended text-sm">
                                    Kayıt Ol
                                </h1>
                            </NavLink>
                        </div>
                    )}
                    <div className="flex items-center sm:hidden">
                        <MobileMenuButton />
                    </div>
                </div>
            </header>
            <div className={classNames("relative sm:hidden")}>
                <div
                    className={classNames(
                        "absolute w-full z-[100] p-1 shadow border-b transition-[opacity,transform] duration-200",
                        "bg-F7F2EB dark:bg-111216 dark:border-copper-rose-600 border-danube-500",
                        {
                            "opacity-0 -translate-y-full":
                                !showingNavigationDropdown,
                            "opacity-100 translate-y-0":
                                showingNavigationDropdown,
                        }
                    )}
                >
                    {user && (
                        <>
                            <div className="px-4 border-l-2 border-royal-700 dark:border-lotus-700">
                                <div className="font-medium text-gray-600 dark:text-FFF2D7 text-sm">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-400">
                                    {user.email}
                                </div>
                            </div>

                            <div className="my-2 space-y-2">
                                <ResponsiveNavLink
                                    href={route("profile.edit")}
                                    className="border-l-2 border-royal-700 dark:border-lotus-700 flex items-center gap-1"
                                >
                                    <FaUser />
                                    <h1>Profil</h1>
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    className="border-l-2 border-royal-700 dark:border-lotus-700"
                                >
                                    Çıkış yap
                                </ResponsiveNavLink>
                            </div>
                        </>
                    )}
                    {!user && (
                        <div className="my-2 space-y-2">
                            <ResponsiveNavLink
                                href={route("login")}
                                className="border-l-2 border-royal-700 dark:border-lotus-700"
                            >
                                <h1>Giriş Yap</h1>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("register")}
                                className="border-l-2 border-royal-700 dark:border-lotus-700"
                            >
                                <h1>Kayıt Ol</h1>
                            </ResponsiveNavLink>
                        </div>
                    )}
                    <hr className="border-gray-300 dark:border-lotus-700/50" />
                    <div className="my-2 space-y-2">
                        {SideBarItems.map((item, i) => (
                            <ResponsiveNavLink
                                key={i}
                                href={route("register")}
                                className="border-l-2 border-royal-700 dark:border-lotus-700 flex items-center gap-2"
                            >
                                <item.icon />
                                <h1>{item.label}</h1>
                            </ResponsiveNavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
