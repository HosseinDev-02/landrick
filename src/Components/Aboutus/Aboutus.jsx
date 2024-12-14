import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function Aboutus() {
    return (
        <section className='mt-[100px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-12'>
                    <div className='flex gap-6 items-center'>
                        <div className='rounded-md overflow-hidden flex shadow-md shadow-sub-title/20 dark:shadow-none items-center justify-center group relative'>
                            <img className='w-full h-full object-cover group-hover:rotate-3 dark:group-hover:-rotate-3 group-hover:scale-[1.1] transition-all duration-500' src="/images/aboutus/ab01.jpg" alt="Aboutus User Image"/>
                            <div className='absolute inset-0 w-full h-full bg-sub-title/65 dark:bg-white/65 flex flex-col gap-0.5 items-start justify-end pb-6 pr-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500'>
                                <span className='font-IranSansFaNum-Bold text-white text-lg dark:text-[#1f2d3d]'>توسعه وب</span>
                                <span className='text-white text-sm dark:text-[#253649]'>اطلاعات و نرم افزار</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div
                                className='rounded-md overflow-hidden flex shadow-md shadow-sub-title/20 dark:shadow-none items-center justify-center group relative'>
                                <img
                                    className='w-full h-full object-cover group-hover:rotate-3 dark:group-hover:-rotate-3 group-hover:scale-[1.1] transition-all duration-500'
                                    src="/images/aboutus/ab02.jpg" alt="Aboutus User Image"/>
                                <div
                                    className='absolute inset-0 w-full h-full bg-sub-title/65 dark:bg-white/65 flex flex-col gap-0.5 items-start justify-end pb-6 pr-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500'>
                                    <span className='font-IranSansFaNum-Bold text-white dark:text-[#1f2d3d] text-lg'>مهندسی مکانیک</span>
                                    <span className='text-white text-sm dark:text-[#253649]'>مهندسی</span>
                                </div>
                            </div>
                            <div
                                className='rounded-md overflow-hidden flex shadow-md shadow-sub-title/20 dark:shadow-none items-center justify-center group relative'>
                                <img
                                    className='w-full h-full object-cover group-hover:rotate-3 dark:group-hover:-rotate-3 group-hover:scale-[1.1] transition-all duration-500'
                                    src="/images/aboutus/ab03.jpg" alt="Aboutus User Image"/>
                                <div
                                    className='absolute inset-0 w-full h-full bg-sub-title/65 dark:bg-white/65 flex flex-col gap-0.5 items-start justify-end pb-6 pr-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500 text-white'>
                                    <span className='font-IranSansFaNum-Bold text-lg dark:text-[#1f2d3d]'>حسابدار خبره</span>
                                    <span className='text-sm text-white dark:text-[#253649]'>C.A.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-2xl md:text-3xl text-title mb-6'>
                            درباره داستان ما
                        </h2>
                        <p className='mb-4'>
                            شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                            تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.
                        </p>
                        <p className='mb-8'>
                            مشهورترین متن ساختگی "لورم ایپسوم " است که گفته می شود از قرن 16 پدید آمده است. لورم ایپسوم
                            در یک زبان شبه لاتین ساخته شده است که کم و بیش با لاتین "مناسب" مطابقت دارد. این شامل یک سری
                            کلمات واقعی لاتین است.
                        </p>
                        <ul className='mb-4'>
                            <li className='flex items-center gap-2 py-1.5'>
                                <span className='text-primary'>
                                    <svg className='w-6 h-6'>
                                        <use href='#check-circle'></use>
                                    </svg>
                                </span>
                                <span>کاملا ریسپانسیو</span>
                            </li>
                            <li className='flex items-center gap-2 py-1.5'>
                                <span className='text-primary'>
                                    <svg className='w-6 h-6'>
                                        <use href='#check-circle'></use>
                                    </svg>
                                </span>
                                <span>طرح چندگانه</span>
                            </li>
                            <li className='flex items-center gap-2 py-1.5'>
                                <span className='text-primary'>
                                    <svg className='w-6 h-6'>
                                        <use href='#check-circle'></use>
                                    </svg>
                                </span>
                                <span>متناسب با سبک شما</span>
                            </li>
                        </ul>
                        <div className='mt-8 flex items-center gap-3'>
                            <PrimaryButton
                                title='ادامه مطلب'
                                icon='angle-left'
                            />
                            <div className='flex items-center gap-2'>
                                <a className='w-9 h-9 bg-primary flex items-center justify-center border border-primary rounded-full text-white shadow shadow-primary/30 transition-all duration-200 hover:bg-primary-darker hover:border-primary-darker' href='#'>
                                    <svg className='w-4 h-4'>
                                        <use href='#video'></use>
                                    </svg>
                                </a>
                                <span className='text-sm font-IranSansFaNum-Bold text-title'>
                                    اکنون تماشا کنید
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}