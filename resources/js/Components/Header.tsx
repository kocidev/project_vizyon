import "../../css/header.css";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ApplicationLogo from "./ApplicationLogo";
import { useState } from "react";
import Dropdown from "./Dropdown";
import ResponsiveNavLink from "./ResponsiveNavLink";
import NavLink from "./NavLink";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import useData from "@/Hooks/useData";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ user, title }: { user: User; title: string }) {
    const { isDark, setIsDark } = useData();
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const MobileMenuButton = () => (
        <button
            onClick={() =>
                setShowingNavigationDropdown(!showingNavigationDropdown)
            }
            className="inline-flex items-center justify-center rounded text-white dark:text-FFF2D7 focus:outline-none hover:bg-white/20 dark:hover:bg-white/10 focus:text-white dark:focus:text-FFF2D7 transition duration-150 ease-in-out"
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
            <header className="w-full lg:my-4 lg:w-4/5 xl:w-2/3 lg:rounded mx-auto p-4 transition-colors bg-havuc flex items-center dark:bg-visne">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-white dark:text-FFF2D7 outline-none ring-0 foucs:ring-0" />
                    </Link>
                </div>
                <div className="mx-2">
                    <h1 className="text-white dark:text-FFF2D7 font-typold-extended font-bold mb-0.5">
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                </div>
                <div className="ml-auto flex items-center gap-2 w-min whitespace-nowrap">
                    <div className="flex gap-4">
                        <div className="w-fit h-fit relative search-box hidden lg:block">
                            <button className="btn-search absolute flex items-center p-1.5 rounded-full top-1/2 -translate-y-1/2 right-0">
                                <FaSearch className="text-white dark:text-current" />
                            </button>
                            <input
                                className="text-white w-0 h-8 input-search border-none tracking-widest outline-none transition-all duration-500 pr-8 text-sm ring-0 focus:outline-none focus:ring-0 placeholder:text-sky bg-transparent"
                                type="text"
                                name="search-bar"
                                id="search-bar"
                                placeholder="Aradığınız film..."
                            />
                        </div>
                        <button
                            className="w-5"
                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? (
                                <MdDarkMode className="text-white dark:text-current w-full h-full" />
                            ) : (
                                <MdLightMode className="text-white dark:text-FFF2D7 w-full h-full" />
                            )}
                        </button>
                    </div>
                    <>
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
                    </>
                </div>
            </header>
            <div
                className={classNames("sm:hidden", {
                    block: showingNavigationDropdown,
                    hidden: !showingNavigationDropdown,
                })}
            >
                <div className="mb-4 p-1 border dark:border-vadigulu border-mandalina rounded-b-sm">
                    {user && (
                        <>
                            <div className="px-4 border-l-2 border-havuc dark:border-visne">
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
                                    className="border-l-2 border-havuc dark:border-visne flex items-center gap-1"
                                >
                                    <FaUser />
                                    <h1>Profil</h1>
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    className="border-l-2 border-havuc dark:border-visne"
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
                                className="border-l-2 border-havuc dark:border-visne flex items-center gap-1"
                            >
                                <h1>Giriş Yap</h1>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("register")}
                                className="border-l-2 border-havuc dark:border-visne flex items-center gap-1"
                            >
                                <h1>Kayıt Ol</h1>
                            </ResponsiveNavLink>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
