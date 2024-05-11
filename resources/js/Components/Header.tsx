import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ApplicationLogo from "./ApplicationLogo";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import ResponsiveNavLink from "./ResponsiveNavLink";
import NavLink from "./NavLink";

export default function Header({ user, title }: { user: User; title: string }) {
    const [isDark, setIsDark] = useState<boolean>(true);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <>
            <Head title={title} />
            <header className="w-full border-b dark:border-b-0 bg-havuc lg:w-5/6 mx-auto flex items-center my-4 p-4 rounded dark:bg-visne">
                <div>
                    <ApplicationLogo className="block h-9 w-auto fill-current text-white dark:text-tFFF2D7" />
                </div>
                <div className="mx-2">
                    <h1 className="text-white dark:text-tFFF2D7 font-semibold">
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                </div>
                <div className="ml-auto flex items-center">
                    <div className="flex">
                        <button
                            className="w-5"
                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? (
                                <MdDarkMode className="text-white dark:text-tFFF2D7 w-full h-full" />
                            ) : (
                                <MdLightMode className="text-white dark:text-tFFF2D7 w-full h-full" />
                            )}
                        </button>
                    </div>
                    {user && (
                        <>
                            <div className="hidden sm:flex sm:items-center ms-2">
                                <div className="relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white dark:text-tFFF2D7 focus:outline-none transition ease-in-out duration-150"
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
                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-white dark:text-tFFF2D7 focus:outline-none hover:bg-white/20 dark:hover:bg-white/10 focus:text-white dark:focus:text-tFFF2D7 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                    {!user && (
                        <>
                            <div className="flex items-center gap-2 ml-2">
                                <NavLink as="button" href={route("login")}>
                                    Giriş yap
                                </NavLink>
                                <NavLink as="button" href={route("register")}>
                                    Kayıt ol
                                </NavLink>
                            </div>
                        </>
                    )}
                </div>
            </header>
            {user && (
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="mb-1 pt-4 pb-1 border dark:border-white/10">
                        <div className="px-4 border-l-2 border-havuc dark:border-visne">
                            <div className="font-medium text-gray-600 dark:text-tFFF2D7 text-sm">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-400">
                                {user.email}
                            </div>
                        </div>

                        <div className="my-2 space-y-2">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                className="border-l-2 border-havuc dark:border-visne"
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
                    </div>
                </div>
            )}
        </>
    );
}
