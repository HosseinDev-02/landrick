import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";

export default function Footer() {
    return (
        <footer className='bg-footer text-[#adb5bd]'>
            <div className="container">
                <div className='flex flex-wrap justify-between py-[60px]'>
                    {/* Footer Introduction */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='lg:max-w-[31%] w-full'>
                            <a className='inline-flex items-center justify-center h-6' href="#">
                                <img className='w-full h-full object-cover' src="/images/logo/logo-light.png"
                                     alt="Landrick Logo"/>
                            </a>
                            <p className='mt-6'>
                                کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد
                                ترافیک ، اتصال به آن نیاز دارید فراهم کند.
                            </p>
                            <div
                                className='flex items-center justify-start gap-2 transition-all duration-500 mt-8 pr-8'>
                                <SocialMediaBox
                                    icon='facebook'
                                    link='#'
                                    className='border-[#283353] hover:text-light hover:border-primary hover:bg-primary'
                                />
                                <SocialMediaBox
                                    icon='instagram'
                                    link='#'
                                    className='border-[#283353] hover:text-light hover:border-primary hover:bg-primary'
                                />
                                <SocialMediaBox
                                    icon='twitter'
                                    link='#'
                                    className='border-[#283353] hover:text-light hover:border-primary hover:bg-primary'
                                />
                                <SocialMediaBox
                                    icon='linkedin'
                                    link='#'
                                    className='border-[#283353] hover:text-light hover:border-primary hover:bg-primary'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between gap-x-6 gap-y-6'>
                            <div className='flex gap-x-20 gap-y-6 flex-col md:flex-row lg:gap-8'>
                                {/* Footer First Menu */}
                                <div className=''>
                                    <h3 className='text-light text-xl'>
                                        شرکت
                                    </h3>
                                    <ul className='flex flex-col pr-8 mt-6 gap-2.5'>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>درباره ما</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>خدمات</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>تیم</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>قیمت گذاری</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>پروژه</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>وبلاگ</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='inline-flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>مشاغل</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Second Menu */}
                                <div>
                                    <h3 className='text-light text-xl'>
                                        لینک های مفید
                                    </h3>
                                    <ul className='flex flex-col pr-8 mt-6 gap-2.5'>
                                        <li className='flex'>
                                            <a className='flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>خدمات سایت</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>حریم خصوصی</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>مستند</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>تغییرات</span>
                                            </a>
                                        </li>
                                        <li className='flex'>
                                            <a className='flex items-center gap-1 transition-colors hover:text-light duration-500'
                                               href="#">
                                                <svg className='w-5 h-5'>
                                                    <use href='#angle-left'></use>
                                                </svg>
                                                <span>اجزاء</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='md:max-w-[30%] lg:max-w-[40%] w-full'>
                                <h3 className='text-light text-xl'>
                                    خبرنامه
                                </h3>
                                <p className='mt-6'>
                                    ثبت نام کنید و آخرین نکات را از طریق ایمیل دریافت کنید.
                                </p>
                                <form className='flex flex-col mt-4' action="#">
                                    <label className='font-IranSansFaNum-Bold text-sm mb-2' htmlFor="#">
                                        ایمیل خود را بنویسید <span className='text-error'>*</span>
                                    </label>
                                    <div className='relative h-10'>
                                        <svg className='w-4 h-4 absolute right-4 top-0 bottom-0 my-auto'>
                                            <use href='#envelope'></use>
                                        </svg>
                                        <input type="text"
                                               className='h-full w-full rounded-md bg-[#27314f] border border-[#27314f] pr-12 text-sm focus:border-primary outline-none'
                                               placeholder='ایمیل شما :'/>
                                    </div>
                                    <button
                                        className='bg-primary/10 flex items-center justify-center rounded-md h-11 mt-4 shadow-btn text-primary font-IranSansFaNum-Bold transition-colors hover:text-white hover:bg-primary duration-500'>
                                        خبرنامه
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-t-[#283353] py-7.5 flex flex-col sm:flex-row gap-8 items-center justify-between'>
                    <p className='text-center sm:text-right'>
                        © 2024 لنـدریــک. طراحی شده با <span className='text-error'>❤</span> توسط جعفر عباسی .
                    </p>
                    <div className='flex items-center gap-1.5'>
                        <a className='flex items-center justify-center h-6' href="#">
                            <img className='w-full h-full object-cover' src="/images/payments/american-ex.png"
                                 alt="emerican-ex"/>
                        </a>
                        <a className='flex items-center justify-center h-6' href="#">
                            <img className='w-full h-full object-cover' src="/images/payments/discover.png"
                                 alt="discover"/>
                        </a>
                        <a className='flex items-center justify-center h-6' href="#">
                            <img className='w-full h-full object-cover' src="/images/payments/visa.png"
                                 alt="visa"/>
                        </a>
                        <a className='flex items-center justify-center h-6' href="#">
                            <img className='w-full h-full object-cover' src="/images/payments/paypal.png"
                                 alt="paypal"/>
                        </a>
                        <a className='flex items-center justify-center h-6' href="#">
                            <img className='w-full h-full object-cover' src="/images/payments/master-card.png"
                                 alt="master-card"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}