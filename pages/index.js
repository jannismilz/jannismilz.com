import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useDarkMode from "../darkmode";
import { useTheme } from "next-themes";

export function Header() {
    const router = useRouter();

    const redirect = (href) => {
        router.push(href);
    };

    function MyLink(props) {
        let { href, children, ...rest } = props;
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        );
    }

    function MyDropdown() {
        return (
            <div className="noOutline">
                <Menu as="div" className="relative flex text-left justify-end">
                    <div>
                        <Menu.Button className="noOutline px-4 py-2 text-xl font-medium text-darkgray dark:text-white duration-200 hover:text-lightblue">
                            <FontAwesomeIcon icon={faBars} />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="noOutline absolute right-0 w-56 mt-10 origin-top-right bg-white rounded-md shadow-2xl">
                            <div className="px-2 py-2 dark:bg-gray rounded-t-md">
                                <Menu.Item>
                                    <MyLink
                                        href="/"
                                        className={`duration-200 hover:text-lightblue ${
                                            router.pathname == "/"
                                                ? "text-lightblue"
                                                : ""
                                        }`}
                                    >
                                        <span className="mr-2">🏠</span>Home
                                    </MyLink>
                                </Menu.Item>
                            </div>
                            <div className="px-2 py-2 dark:bg-gray">
                                <Menu.Item>
                                    <MyLink
                                        href="/references"
                                        className={`duration-200 hover:text-lightblue ${
                                            router.pathname == "/references"
                                                ? "text-lightblue"
                                                : ""
                                        }`}
                                    >
                                        <span className="mr-2">📋</span>
                                        References
                                    </MyLink>
                                </Menu.Item>
                            </div>
                            <div className="px-2 py-2 dark:bg-gray">
                                <Menu.Item>
                                    <MyLink
                                        href="/skills"
                                        className={`duration-200 hover:text-lightblue ${
                                            router.pathname == "/skills"
                                                ? "text-lightblue"
                                                : ""
                                        }`}
                                    >
                                        <span className="mr-2">💪</span>Skills
                                    </MyLink>
                                </Menu.Item>
                            </div>
                            <div className="px-2 py-2 dark:bg-gray">
                                <Menu.Item>
                                    <MyLink
                                        href="/blog"
                                        target="_blank"
                                        className={`duration-200 hover:text-lightblue`}
                                    >
                                        <span className="mr-2">🖋</span>Blog
                                    </MyLink>
                                </Menu.Item>
                            </div>
                            <div className="px-2 py-2 dark:bg-gray rounded-b-md">
                                <Menu.Item>
                                    <MyLink
                                        href="/contact"
                                        className={`duration-200 hover:text-lightblue ${
                                            router.pathname == "/contact"
                                                ? "text-lightblue"
                                                : ""
                                        }`}
                                    >
                                        <span className="mr-2">🔗</span>Contact
                                    </MyLink>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        );
    }

    function Darkmode() {
        const { theme, setTheme } = useTheme();

        return (
            <div className="text-center">
                <button
                    onClick={() => setTheme("light")}
                    className="hidden dark:block text-white"
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
                <button
                    onClick={() => setTheme("dark")}
                    className="block dark:hidden text-darkgray"
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            </div>
        );
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                {router.pathname === "/" ? (
                    <title>Home | Jannis Milz</title>
                ) : (
                    ""
                )}
            </Head>
            <div className="grid grid-cols-3 h-20 text-darkgray absolute w-full top-0 dark:bg-darkgray dark:text-white z-50">
                <button
                    className="flex col-span-1 mx-auto my-auto"
                    onClick={() => redirect("/")}
                >
                    <Image
                        src="/Mascot.png"
                        alt="Logo"
                        width="60"
                        height="60"
                        layout="fixed"
                    />
                    <span className="my-auto md:ml-2 text-3xl font-bold font-roboto">
                        Jannis
                    </span>
                </button>
                <div className="col-span-2 my-auto mr-4 lg:mr-10">
                    <div className="hidden lg:flex gap-10 justify-end col-span-2 my-auto mx-auto font-semibold">
                        <a
                            href="/"
                            className={`duration-200 hover:text-lightblue ${
                                router.pathname == "/" ? "text-lightblue" : ""
                            }`}
                        >
                            <span className="mr-2">🏠</span>Home
                        </a>
                        <a
                            href="/references"
                            className={`duration-200 hover:text-lightblue ${
                                router.pathname == "/references"
                                    ? "text-lightblue"
                                    : ""
                            }`}
                        >
                            <span className="mr-2">📋</span> References
                        </a>
                        <a
                            href="/skills"
                            className={`duration-200 hover:text-lightblue ${
                                router.pathname == "/skills"
                                    ? "text-lightblue"
                                    : ""
                            }`}
                        >
                            <span className="mr-2">💪</span> Skills
                        </a>
                        <a
                            href="/blog"
                            target="_blank"
                            className={`duration-200 hover:text-lightblue`}
                        >
                            <span className="mr-2">🖋</span> Blog
                        </a>
                        <a
                            href="/contact"
                            className={`duration-200 hover:text-lightblue ${
                                router.pathname == "/contact"
                                    ? "text-lightblue"
                                    : ""
                            }`}
                        >
                            <span className="mr-2">🔗</span> Contact
                        </a>
                        <Darkmode />
                    </div>
                    <div className="lg:hidden flex items-center float-right">
                        <div className="mr-6">
                            <Darkmode />
                        </div>
                        <MyDropdown />
                    </div>
                </div>
            </div>
        </>
    );
}

export function Footer() {
    return (
        <div className="text-sm text-center py-4 text-gray dark:bg-darkgray dark:text-lightgray font-semibold">
            Copyright © Jannis Milz. All rights reserved.
        </div>
    );
}

export default function Home() {
    const router = useRouter();

    const redirect = (href) => {
        router.push(href);
    };

    return (
        <>
            <Header />
            <div className="h-screen flex justify-center items-center dark:bg-darkgray">
                <div>
                    <div className="text-5xl lg:text-6xl font-semibold text-darkgray dark:text-white text-center">
                        Hello, I'm Jannis Milz
                    </div>
                    <div className="text-2xl lg:text-3xl font-semibold text-[#A0A0A0] text-center mt-3">
                        Never stop challenging yourself
                    </div>
                    <button
                        onClick={() => redirect("/references")}
                        className="block mt-16 text-md font-semibold bg-lightblue w-max py-2 px-12 rounded-xl mx-auto text-white duration-200 hover:bg-opacity-80"
                    >
                        My references »
                    </button>
                </div>
            </div>
            <div className="bg-lightgray dark:bg-gray dark:text-white w-full md:p-20 p-10">
                <div className="lg:w-4/5 max-w-5xl mx-auto">
                    <div className="text-center md:text-xl italic font-[500]">
                        <p>
                            I’m a web developer working with various languages
                            and frameworks. I’m always excited to build new
                            projects and learn new things to extend my
                            knowledge. It’s very fascinating what you can do
                            with programming.
                        </p>
                    </div>
                    <hr className="w-3/4 m-auto my-4 text-[#868686]" />
                    <div className="text-center text-[#868686] text-xl italic font-semibold">
                        ~Jannis Milz
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
