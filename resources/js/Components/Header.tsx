import { User } from "@/types";
import { Head } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { useState } from "react";
import Dropdown from "./Dropdown";
import ResponsiveNavLink from "./ResponsiveNavLink";
import NavLink from "./NavLink";

export default function Header({ user, title }: { user: User; title: string }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title={title} />
            <header className="w-full lg:w-5/6 mx-auto flex items-center my-4 p-4 rounded bg-white dark:bg-t322C2B">
                <div>
                    <ApplicationLogo className="block h-9 w-auto fill-current text-t87431D dark:text-tE4C59E" />
                </div>
                <div className="mx-2">
                    <h1 className="text-t2D2424 dark:text-tE4C59E">
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                </div>
                <div className="ml-auto">
                    {user && (
                        <>
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-tFFE0B5 hover:text-gray-700 dark:hover:text-white focus:outline-none transition ease-in-out duration-150"
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
                                                Profil
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Çıkış yap
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
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
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
                            <div className="flex items-center gap-2">
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
                    <div className="mb-1 pt-4 pb-1 border border-t-0 border-gray-200 dark:border-gray-600">
                        <div className="px-4 border-l-2 border-t87431D">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="my-2 space-y-2">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                className="border-l-2 border-t87431D"
                            >
                                Profil
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="border-l-2 border-t87431D"
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
