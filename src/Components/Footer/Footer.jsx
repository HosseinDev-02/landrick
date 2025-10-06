import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-footer-bg text-footer">
            <div className="container">
                <div className="flex flex-wrap justify-between py-[60px]">
                    {/* Footer Introduction */}
                    <div className="flex flex-col lg:flex-row gap-6 justify-between">
                        <div className="lg:max-w-[31%] w-full">
                            <a
                                className="inline-flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/logo/logo-light.png"
                                    alt="Landrick Logo"
                                />
                            </a>
                            <p className="mt-6">
                                کار با لنـدریــک را شروع کنید که می تواند همه
                                چیزهایی را که برای ایجاد آگاهی ، ایجاد ترافیک ،
                                اتصال به آن نیاز دارید فراهم کند.
                            </p>
                            <div className="flex items-center justify-start gap-2 transition-all duration-500 mt-8">
                                <SocialMediaBox
                                    icon="facebook"
                                    link="#"
                                    className="border-footer-border hover:text-light hover:border-primary hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                                />
                                <SocialMediaBox
                                    icon="instagram"
                                    link="#"
                                    className="border-footer-border hover:text-light hover:border-primary hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                                />
                                <SocialMediaBox
                                    icon="twitter"
                                    link="#"
                                    className="border-footer-border hover:text-light hover:border-primary hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                                />
                                <SocialMediaBox
                                    icon="linkedin"
                                    link="#"
                                    className="border-footer-border hover:text-light hover:border-primary hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-x-6 gap-y-6">
                            <div className="flex gap-x-20 gap-y-6 flex-col md:flex-row">
                                {/* Footer First Menu */}
                                <div className="">
                                    <h3 className="text-light dark:font-IranSansDn dark:text-white text-xl">
                                        شرکت
                                    </h3>
                                    <ul className="flex flex-col mt-6 gap-2.5">
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="/aboutus"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>درباره ما</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="/services"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>خدمات</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="/team"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>تیم</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="/pricing"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>قیمت گذاری</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>پروژه</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="/blogs"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>وبلاگ</span>
                                            </Link>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                className="inline-flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                to="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>مشاغل</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Second Menu */}
                                <div>
                                    <h3 className="text-light dark:text-white dark:font-IranSansDn text-xl">
                                        لینک های مفید
                                    </h3>
                                    <ul className="flex flex-col mt-6 gap-2.5">
                                        <li className="flex">
                                            <a
                                                className="flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                href="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>خدمات سایت</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                href="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>حریم خصوصی</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                href="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>مستند</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                href="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>تغییرات</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                className="flex items-center gap-1 transition-colors hover:text-light dark:hover:text-[#e6e8ea] duration-500"
                                                href="#"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#angle-left"></use>
                                                </svg>
                                                <span>اجزاء</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:max-w-[30%] lg:max-w-[40%] w-full">
                                <h3 className="text-light dark:text-white dark:font-IranSansDn text-xl">
                                    خبرنامه
                                </h3>
                                <p className="mt-6">
                                    ثبت نام کنید و آخرین نکات را از طریق ایمیل
                                    دریافت کنید.
                                </p>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="flex flex-col mt-4"
                                    action="#"
                                >
                                    <Input
                                        color="text-inherit"
                                        className="!bg-[#27314f] !text-inherit dark:!bg-[#28394e] !border-[#27314f] dark:!border-[#28394e] dark:focus:!border-primary focus:!border-primary"
                                        icon="envelope"
                                        require={true}
                                        type="text"
                                        label="ایمیل خود را بنویسید"
                                        placeholder="ایمیل شما"
                                    />
                                    <button
                                        className="bg-primary/10 flex items-center justify-center rounded-md h-11 mt-4 shadow shadow-primary/30 text-primary font-IranSansFaNum-Bold transition-colors hover:text-white hover:bg-primary duration-500"
                                    >
                                        خبرنامه
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-footer-border dark:border-none dark:shadow-sm dark:shadow-sub-title/15">
                <div className="container">
                    <div className="py-7.5 flex flex-col sm:flex-row gap-8 items-center justify-between">
                        <p className="text-center sm:text-right">
                            © 2024 لنـدریــک. طراحی شده با{" "}
                            <span className="text-error">❤</span> توسط جعفر
                            عباسی .
                        </p>
                        <div className="flex items-center gap-1.5">
                            <a
                                className="flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/payments/american-ex.png"
                                    alt="emerican-ex"
                                />
                            </a>
                            <a
                                className="flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/payments/discover.png"
                                    alt="discover"
                                />
                            </a>
                            <a
                                className="flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/payments/visa.png"
                                    alt="visa"
                                />
                            </a>
                            <a
                                className="flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/payments/paypal.png"
                                    alt="paypal"
                                />
                            </a>
                            <a
                                className="flex items-center justify-center h-6"
                                href="#"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/payments/master-card.png"
                                    alt="master-card"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
