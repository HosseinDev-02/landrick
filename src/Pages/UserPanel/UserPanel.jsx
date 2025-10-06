import { Link, Outlet, useMatch } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SocialMediaBox from "../../Components/SocialMediaBox/SocialMediaBox";
import { useEffect, useState } from "react";
import UserPanelMenuItem from "../../Components/UserPanelMenuItem/UserPanelMenuItem";
import { userProfileLinks } from "../../data";

export default function UserPanel() {
    const match = useMatch("/:dashboard/*");
    const [activeTab, setActiveTab] = useState(match.params["*"]);
    const [showBox, setShowBox] = useState(false);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        setActiveTab(match.params["*"]);
    }, [match]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prevNumber) => prevNumber + 1);
        }, 20);

        if (number === 60) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [number]);

    const setUserProfileIconLinks = (shortName) => {
        return (
            (shortName === "پروفایل" && "dashboard") ||
            (shortName === "اعضا" && "users-alt") ||
            (shortName === "نمونه کار" && "file-alt") ||
            (shortName === "پیام ها" && "envelope-star") ||
            (shortName === "پرداخت ها" && "transaction") ||
            (shortName === "تنظیمات" && "config") ||
            (shortName === "خروج" && "power")
        );
    };
    return (
        <>
            <Header />

            <main>
                <div
                    id="user-panel-header"
                    className="bg-primary flex items-center justify-center py-[100px]"
                >
                    <div className="container">
                        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between bg-body shadow-sm shadow-sub-title/15 rounded-md p-6 relative top-[159px]">
                            <div className="w-[140px] h-[140px] rounded-full overflow-hidden shrink-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/team/06.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between w-full">
                                <div className="flex gap-y-2 flex-col items-center md:items-start">
                                    <h4 className="text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-3xl">
                                        جعفر عباسی
                                    </h4>
                                    <span className="font-IranSansFaNum-Bold dark:font-IranSansDn-Bold">
                                        توسعه وب
                                    </span>
                                    <div className="flex items-center gap-4 mt-2 md:mt-4">
                                        <a
                                            className="flex items-center gap-2"
                                            href="#"
                                        >
                                            <svg className="w-4 h-4">
                                                <use href="#instagram"></use>
                                            </svg>
                                            <span>jafar_abbasi</span>
                                        </a>
                                        <a
                                            className="flex items-center gap-2"
                                            href="#"
                                        >
                                            <svg className="w-4 h-4">
                                                <use href="#linkedin"></use>
                                            </svg>
                                            <span>جعفر عباسی</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-1 mt-2 md:mt-0">
                                    <SocialMediaBox
                                        className="border-footer text-footer hover:bg-primary hover:text-white hover:border-primary"
                                        icon="comment"
                                    />
                                    <SocialMediaBox
                                        className="border-footer text-footer hover:bg-primary hover:text-white hover:border-primary"
                                        icon="user-plus"
                                    />
                                    <SocialMediaBox
                                        className="border-footer text-footer hover:bg-primary hover:text-white hover:border-primary"
                                        icon="bell"
                                    />
                                    <SocialMediaBox
                                        className="border-footer text-footer hover:bg-primary hover:text-white hover:border-primary"
                                        icon="config"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="pt-[100px] pb-[60px] md:pb-[100px]">
                    <div className="container">
                        <div className="flex flex-col gap-6 rounded-md">
                            <div className="flex flex-col lg:flex-row items-start gap-6">
                                {/* sidebar */}
                                <div className="w-full lg:basis-1/3 shadow-sm shadow-sub-title/15 rounded-md p-6">
                                    <div>
                                        <h5 className="text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-6">
                                            فالوور :
                                        </h5>
                                        <div className="flex">
                                            <div className="w-1/2 flex flex-col items-center gap-1">
                                                <svg className="w-5 h-5 text-primary">
                                                    <use href="#add-user"></use>
                                                </svg>
                                                <span className="text-xl text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold">
                                                    2469
                                                </span>
                                                <span>دنبال کننده</span>
                                            </div>
                                            <div className="w-1/2 flex flex-col items-center gap-1">
                                                <svg className="w-5 h-5 text-primary">
                                                    <use href="#users"></use>
                                                </svg>
                                                <span className="text-xl text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold">
                                                    257
                                                </span>
                                                <span>دنبال می کنید</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-6">
                                            پروژه :
                                        </h5>
                                        <div className="flex flex-col gap-2 overflow-hidden">
                                            <span className="font-IranSansFaNum-Bold">
                                                پیش رفتن
                                            </span>
                                            <div className="rounded-md h-2 bg-[#e9ecef]">
                                                <div
                                                    style={{
                                                        width: `${number}%`,
                                                    }}
                                                    className="bg-primary h-full rounded-md relative"
                                                >
                                                    <span className="absolute -left-4 -top-7 font-IranSansFaNum-Bold dark:font-IranSansDn-Bold">
                                                        24 / 48
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block mt-8 py-[15px]">
                                        <ul className="flex flex-col gap-3.5">
                                            {userProfileLinks.map((item) =>
                                                item.title === "خروج" ? (
                                                    <UserPanelMenuItem
                                                        key={item.id}
                                                        icon={setUserProfileIconLinks(
                                                            item.title
                                                        )}
                                                        title={item.title}
                                                        path={'/login'}
                                                        onClickHandler={() =>
                                                            setActiveTab("")
                                                        }
                                                        className="flex items-center gap-2 font-IranSansFaNum-Bold text-title h-[52px] rounded-md shadow-sm shadow-sub-title/15 px-6 hover:bg-primary hover:text-white transition-all duration-500 !bg-error"
                                                    />
                                                ) : (
                                                    <UserPanelMenuItem
                                                        key={item.id}
                                                        icon={setUserProfileIconLinks(
                                                            item.title
                                                        )}
                                                        title={item.title}
                                                        activeTab={activeTab}
                                                        path={item.href}
                                                        activeTitle={
                                                            item.shortName
                                                        }
                                                        onClickHandler={() =>
                                                            setActiveTab(
                                                                item.shortName
                                                            )
                                                        }
                                                    />
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-6">
                                            دنبال کردن ما :
                                        </h5>
                                        <div className="flex items-center gap-1">
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="instagram"
                                            />
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="linkedin"
                                            />
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="twitter"
                                            />
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="github"
                                            />
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="youtube"
                                            />
                                            <SocialMediaBox
                                                className="social-media"
                                                icon="gitlab"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* content */}
                                <div className="w-full lg:basis-2/3">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <div
                className={`fixed top-32 flex lg:hidden items-start transition-all duration-500 ${
                    showBox ? "right-0" : "-right-64"
                } z-50`}
            >
                <div className="w-64 bg-light-bg shadow-sm shadow-sub-title/15 flex flex-col justify-between items-center px-6 py-4">
                    <ul className="flex flex-col gap-3.5 w-full">
                        {userProfileLinks.map((item) => {
                            const icon = setUserProfileIconLinks(item.title);
                            return (
                                <li key={item.id}>
                                    <Link
                                        onClick={() => {
                                            if (item.title === "خروج") {
                                                setActiveTab("");
                                            } else {
                                                setActiveTab(item.shortName);
                                            }
                                            setShowBox(
                                                (prevState) => !prevState
                                            );
                                        }}
                                        className={`user-panel-menu-item ${item.title === 'خروج' && '!bg-error text-white'} ${
                                            activeTab === item.shortName
                                                ? "text-white bg-primary"
                                                : ""
                                        }`}
                                        to={
                                            item.title === "خروج"
                                                ? "/login"
                                                : item.href
                                        }
                                    >
                                        <svg className="w-6 h-6">
                                            <use href={`#${icon}`}></use>
                                        </svg>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        {/* <li>
                            <Link
                                onClick={() => {
                                    setActiveTab("");
                                    setShowBox((prevState) => !prevState);
                                }}
                                className={`flex items-center gap-2 font-IranSansFaNum-Bold text-title h-[52px] rounded-md shadow-sm shadow-sub-title/15 px-6 hover:bg-primary hover:text-white transition-all duration-500`}
                                to="/login"
                            >
                                <svg className="w-6 h-6">
                                    <use href="#power"></use>
                                </svg>
                                <span>خروج</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <span
                    onClick={() => setShowBox((prevState) => !prevState)}
                    className="w-10 h-10 rounded-tl-3xl shadow-sm shadow-sub-title/15 rounded-bl-3xl bg-body text-primary flex items-center justify-center cursor-pointer"
                >
                    <svg className="w-6 h-6">
                        <use href="#draggabledots"></use>
                    </svg>
                </span>
            </div>
        </>
    );
}
