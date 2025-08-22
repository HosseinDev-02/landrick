import Symbols from "../../Symbols/Symbols";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LightButton from "../LightButton/LightButton";
import ThemeBox from "../ThemeBox/ThemeBox";
import IconButton from "../IconButton/IconButton";
import { Loader } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Header({ changeMode }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);
    const [headerBg, setHeaderBg] = useState(false);
    const [showScrollToUpButton, setShowScrollToUpButton] = useState(false);
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);

    const header = useRef();
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.add("light");
            setTheme("light");
        }
        setHeaderFixedStyle();
        setScrollUpButton();
        window.addEventListener("scroll", (e) => {
            setHeaderFixedStyle();
            setScrollUpButton();
        });

        // وقتی کل صفحه (تمام عکس‌ها و فونت‌ها) لود شد
        const handleLoad = () => setLoading(false);

        window.addEventListener("load", handleLoad);

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    const setHeaderFixedStyle = () => {
        if (window.scrollY > 100) {
            setHeaderBg(true);
        } else if (window.scrollY === 0) {
            setHeaderBg(false);
        }
    };

    const setScrollUpButton = () => {
        if (window.scrollY > 600) {
            setShowScrollToUpButton(true);
        } else {
            setShowScrollToUpButton(false);
        }
    };

    const scrollUpHandler = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: "0",
            left: "0",
            behavior: "smooth",
        });
    };

    const themeChangeHandler = (event) => {
        event.preventDefault();
        if (document.documentElement.className.includes("dark")) {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    const mobileMenuHandler = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    const mobileSubmenuHandler = (event) => {
        event.preventDefault();
        setShowMobileSubmenu((prevState) => !prevState);
    };

    return (
        <>
            <Symbols />
            <header
                ref={header}
                className={`fixed left-0 right-0 flex items-center transition-colors duration-200 z-[55] justify-center bg-body lg:bg-transparent ${
                    headerBg && "lg:!bg-body shadow-sm shadow-sub-title/15"
                }`}
            >
                <div className="container">
                    <nav className="flex items-center justify-between">
                        {/*  Header Landrick Logo  */}
                        <a className="inline-block leading-[74px]" href="/">
                            {changeMode ? (
                                <img
                                    className="inline h-6 w-full object-cover"
                                    src="/images/logo/logo-dark.png"
                                    alt="Landrick Logo"
                                />
                            ) : (
                                <>
                                    {/* Light Logo */}
                                    {headerBg && theme === "dark" ? (
                                        <img
                                            className="hidden lg:inline h-6 w-full object-cover"
                                            src="/images/logo/logo-light.png"
                                            alt="Landrick Logo"
                                        />
                                    ) : headerBg && theme === "light" ? (
                                        <img
                                            className="hidden lg:inline h-6 w-full object-cover"
                                            src="/images/logo/logo-dark.png"
                                            alt="Landrick Logo"
                                        />
                                    ) : (
                                        <img
                                            className="hidden lg:inline h-6 w-full object-cover"
                                            src="/images/logo/logo-light.png"
                                            alt="Landrick Logo"
                                        />
                                    )}
                                    {/* Dark Logo */}
                                    {theme === "dark" ? (
                                        <img
                                            className="inline lg:hidden h-6 w-full object-cover"
                                            src="/images/logo/logo-light.png"
                                            alt="Landrick Logo"
                                        />
                                    ) : (
                                        <img
                                            className="inline lg:hidden h-6 w-full object-cover"
                                            src="/images/logo/logo-dark.png"
                                            alt="Landrick Logo"
                                        />
                                    )}
                                </>
                            )}
                        </a>
                        {/*  Header Landrick Menu  */}
                        <ul
                            className={`hidden lg:flex gap-5 child:transition-all ${
                                headerBg || changeMode
                                    ? "text-sub-title child-hover:text-primary"
                                    : "text-white/50 child-hover:text-white"
                            }`}
                        >
                            <li
                                className={`inline-flex items-center ${
                                    headerBg || changeMode
                                        ? "text-primary"
                                        : "menu-item--active"
                                }`}
                            >
                                <a
                                    className="font-IranSansDn-Bold text-xs/[74px] px-[15px]"
                                    href="/"
                                >
                                    صفحه اصلی
                                </a>
                            </li>
                            <li className="inline-flex items-center">
                                <a
                                    className="font-IranSansDn-Bold text-xs/[74px] px-[15px]"
                                    href="/blogs"
                                >
                                    وبلاگ
                                </a>
                            </li>
                            {/* Has Submenu */}
                            <li className="relative group/aboutus">
                                <a
                                    className="flex items-center gap-1 font-IranSansDn-Bold text-xs/[74px] px-[15px]"
                                    href="#"
                                >
                                    <span>شرکت</span>
                                    <svg className="w-6 h-6 group-hover/aboutus:rotate-180 transition-all">
                                        <use href="#angle-down"></use>
                                    </svg>
                                </a>
                                <ul className="flex flex-col w-46 bg-body rounded-md py-[15px] absolute right-0 top-[110%] invisible opacity-0 transition-all group-hover/aboutus:visible group-hover/aboutus:opacity-100 group-hover/aboutus:top-full duration-200 shadow-sm shadow-sub-title/15 dark:shadow-white/15">
                                    <li>
                                        <a
                                            className="px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block"
                                            href="/services"
                                        >
                                            خدمات
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block"
                                            href="/history"
                                        >
                                            تاریخجه
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block"
                                            href="/team"
                                        >
                                            تیم ما
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block"
                                            href="/pricing"
                                        >
                                            قیمت گذاری
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block"
                                            href="/aboutus"
                                        >
                                            درباره ما
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="inline-flex items-center">
                                <a
                                    className="font-IranSansDn-Bold text-xs/[74px] px-[15px]"
                                    href="/contact-us"
                                >
                                    تماس با ما
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <a
                                className="flex md:hidden items-center justify-center w-6 h-6 bg-primary rounded"
                                href="/user-panel/profile"
                            >
                                <svg className="w-4 h-4 text-white">
                                    <use href="#user-fill"></use>
                                </svg>
                            </a>
                            {/* Mobile Menu Btn */}
                            <div
                                onClick={mobileMenuHandler}
                                className={`lg:hidden cursor-pointer w-6 h-6 relative shrink-0 flex`}
                            >
                                <span
                                    className={`block h-0.5 absolute w-full bg-title rounded-xl transition-all ${
                                        showMobileMenu
                                            ? "rotate-45 top-2"
                                            : "top-0.5"
                                    }`}
                                ></span>
                                <span
                                    className={`h-0.5 w-full bg-title rounded-xl absolute top-[11px] transition-all duration-200 block ${
                                        showMobileMenu && "invisible opacity-0"
                                    }`}
                                ></span>
                                <span
                                    className={`block h-0.5 w-full bg-title absolute rounded-xl transition-all ${
                                        showMobileMenu
                                            ? "top-2 -rotate-45"
                                            : "top-5"
                                    }`}
                                ></span>
                            </div>
                            {/* Mobile Menu */}
                            <div
                                className={`fixed top-[74px] left-0 right-0 bg-body transition-all lg:hidden ${
                                    showMobileMenu
                                        ? "block border-y border-y-[#f1f3f9] dark:border-y-footer-border"
                                        : "hidden"
                                }`}
                            >
                                <ul className="flex flex-col pr-2.5">
                                    <li className="mobile-submenu-item--active">
                                        <a
                                            className="px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title"
                                            href="/"
                                        >
                                            صفحه اصلی
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title"
                                            href="/blogs"
                                        >
                                            وبلاگ
                                        </a>
                                    </li>
                                    <li>
                                        {/* Has SubMenu */}
                                        <a
                                            onClick={(event) =>
                                                mobileSubmenuHandler(event)
                                            }
                                            className={`flex items-center justify-between px-5 py-2.5 font-IranSansDn-Bold text-xs ${
                                                showMobileSubmenu
                                                    ? "text-primary"
                                                    : "text-sub-title"
                                            }`}
                                            href="#"
                                        >
                                            <span>شرکت</span>
                                            <svg
                                                className={`w-6 h-6 ${
                                                    showMobileSubmenu &&
                                                    "rotate-180"
                                                }`}
                                            >
                                                <use href="#angle-down"></use>
                                            </svg>
                                        </a>
                                        <ul
                                            className={`flex-col pr-5 ${
                                                showMobileSubmenu
                                                    ? "flex"
                                                    : "hidden"
                                            }`}
                                        >
                                            <li>
                                                <a
                                                    className="font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]"
                                                    href="/services"
                                                >
                                                    خدمات
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]"
                                                    href="/history"
                                                >
                                                    تاریخجه
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]"
                                                    href="/team"
                                                >
                                                    تیم ما
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]"
                                                    href="/pricing"
                                                >
                                                    قیمت گذاری
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]"
                                                    href="/aboutus"
                                                >
                                                    درباره ما
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title"
                                            href="/contact-us"
                                        >
                                            تماس با ما
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Header Register Btn */}
                            {changeMode ? (
                                <PrimaryButton
                                    className="hidden md:flex"
                                    link="/user-panel/profile"
                                    title="پروفایل کاربر"
                                />
                            ) : (
                                <>
                                    <div className="hidden lg:block relative">
                                        {headerBg ? (
                                            <PrimaryButton
                                                link="/user-panel/profile"
                                                title="پروفایل کاربر"
                                            />
                                        ) : (
                                            <LightButton
                                                link="/user-panel/profile"
                                                title="پروفایل کاربر"
                                            />
                                        )}
                                    </div>
                                    <div className="hidden md:block lg:hidden">
                                        <PrimaryButton
                                            link="/user-panel/profile"
                                            title="پروفایل کاربر"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
            <ThemeBox
                theme={theme}
                changeThemeHandler={themeChangeHandler}
                setTheme={setTheme}
            />

            {showScrollToUpButton && (
                <IconButton
                    animation={true}
                    className="bottom-8 left-8 transition-all duration-500 hover:rotate-45 hover:bg-primary-darker"
                    icon="arrow-up"
                    onClick={(e) => scrollUpHandler(e)}
                />
            )}
            {loading && (
                <div className="fixed inset-0 m-auto bg-black/90 flex items-center justify-center z-[1999]">
                    <Loader
                        emptyColor="rgb(var(--color-sub-title))"
                        filledColor="rgb(var(--color-primary))"
                        className="page-loader"
                    />
                </div>
            )}
        </>
    );
}
