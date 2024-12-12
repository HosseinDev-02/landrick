export default function LastNews() {
    return(
        <section className='py-[100px] mt-[100px] bg-light'>
            <div className="container">
            {/*  Section Header  */}
                <div className='flex flex-col lg:flex-row gap-y-6 items-center justify-between'>
                    <div>
                        <span className='text-primary font-IranSansFaNum-Bold block mb-2 text-center lg:text-right'>وبلاگ</span>
                        <h2 className='font-IranSansFaNum-Bold text-2xl md:text-3xl text-title leading-[45px] text-center lg:text-right'>
                            آخرین اخبار سایت
                            <br/>
                            و بروز رسانی ها را دنبال کنید
                        </h2>
                    </div>
                    <p className='text-center lg:text-right max-w-[560px] lg:max-w-[511px] w-full'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </div>
                {/*  Section Content  */}
                <div className='mt-8 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
                    <div
                        className='blog rounded-md overflow-hidden shadow-[0_0_3px_rgba(60,72,88,0.15)] transition-all duration-500 hover:mb-2 group'>
                        <div className='relative'>
                            <img className='w-full h-full object-cover' src="/images/blogs/01.jpg" alt="blog 1"/>
                            <div
                                className='absolute inset-0 p-4 bg-sub-title/40 invisible opacity-0 transition-opacity duration-500 group-hover:visible group-hover:opacity-100'>
                                <div className='mb-1 flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-light'>
                                        <use href='#user'></use>
                                    </svg>
                                    <span className='text-sm text-light'>کالوین لورس</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-light'>
                                        <use href='#calendar-alt'></use>
                                    </svg>
                                    <span className='text-sm text-light'>اردیبهشت 1403</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <h2 className='mb-4'>
                                <a className='text-xl font-IranSansFaNum-Bold text-title transition-all hover:text-primary duration-500'
                                   href="#">
                                    برنامه های خود را به روش خود طراحی کنید
                                </a>
                            </h2>
                            <div className='flex items-center justify-between pr-8'>
                                <div className='flex items-center gap-3'>
                                    <a href='' className='flex items-center gap-1 hover:text-error transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#heart'></use>
                                        </svg>
                                        <span className='text-sm'>33</span>
                                    </a>
                                    <a href='#' className='flex items-center gap-1 hover:text-success transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#comment'></use>
                                        </svg>
                                        <span className='text-sm'>08</span>
                                    </a>
                                </div>
                                <a className='flex items-center gap-1 transition-all hover:text-primary duration-500 text-sm'
                                   href="#">
                                    ادامه مطلب
                                    <svg className='w-4 h-4'>
                                        <use href='#angle-left'></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className='blog rounded-md overflow-hidden shadow-[0_0_3px_rgba(60,72,88,0.15)] transition-all duration-500 group'>
                        <div className='relative'>
                            <img className='w-full h-full object-cover' src="/images/blogs/02.jpg" alt="blog 1"/>
                            <div
                                className='absolute inset-0 w-full h-full bg-sub-title/40 p-4 invisible opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100'>
                                <div className='flex items-center gap-1 mb-1'>
                                    <svg className='w-4 h-4 text-light'>
                                    <use href='#user'></use>
                                    </svg>
                                    <span className='text-sm text-light'>کالوین لورس</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-light'>
                                        <use href='#calendar-alt'></use>
                                    </svg>
                                    <span className='text-sm text-light'>اردیبهشت 1403</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <h2 className='mb-4'>
                                <a className='text-xl font-IranSansFaNum-Bold text-title transition-all hover:text-primary duration-500'
                                   href="#">
                                    برنامه ها چگونه دنیای اطلاعات را تغییر می دهند
                                </a>
                            </h2>
                            <div className='flex items-center justify-between pr-8'>
                                <div className='flex items-center gap-3'>
                                    <a href='#' className='flex items-center gap-1 hover:text-error transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#heart'></use>
                                        </svg>
                                        <span className='text-sm'>33</span>
                                    </a>
                                    <a href='#' className='flex items-center gap-1 hover:text-success transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#comment'></use>
                                        </svg>
                                        <span className='text-sm'>08</span>
                                    </a>
                                </div>
                                <a className='flex items-center gap-1 transition-all hover:text-primary duration-500 text-sm'
                                   href="#">
                                    ادامه مطلب
                                    <svg className='w-4 h-4'>
                                        <use href='#angle-left'></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className='blog rounded-md overflow-hidden shadow-[0_0_3px_rgba(60,72,88,0.15)] transition-all duration-500 group'>
                        <div className='relative'>
                            <img className='w-full h-full object-cover' src="/images/blogs/01.jpg" alt="blog 1"/>
                            <div
                                className='absolute inset-0 w-full h-full bg-sub-title/40 p-4 invisible opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100'>
                                <div className='flex items-center gap-1 mb-1'>
                                    <svg className='w-4 h-4 text-light'>
                                        <use href='#user'></use>
                                    </svg>
                                    <span className='text-sm text-light'>کالوین لورس</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-light'>
                                        <use href='#calendar-alt'></use>
                                    </svg>
                                    <span className='text-sm text-light'>اردیبهشت 1403</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <h2 className='mb-4'>
                                <a className='text-xl font-IranSansFaNum-Bold text-title transition-all hover:text-primary duration-500'
                                   href="#">
                                    هوشمندترین برنامه ها برای تجارت و کار
                                </a>
                            </h2>
                            <div className='flex items-center justify-between pr-8'>
                                <div className='flex items-center gap-3'>
                                    <a href='#' className='flex items-center gap-1 hover:text-error transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#heart'></use>
                                        </svg>
                                        <span className='text-sm'>33</span>
                                    </a>
                                    <a href='#' className='flex items-center gap-1 hover:text-success transition-colors duration-500'>
                                        <svg className='w-4 h-4'>
                                            <use href='#comment'></use>
                                        </svg>
                                        <span className='text-sm'>08</span>
                                    </a>
                                </div>
                                <a className='flex items-center gap-1 transition-all hover:text-primary duration-500 text-sm'
                                   href="#">
                                    ادامه مطلب
                                    <svg className='w-4 h-4'>
                                        <use href='#angle-left'></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}