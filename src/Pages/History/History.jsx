import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";

export default function History() {
    return (
        <>
            <Header changeMode={true}/>
            <main>
                <PageHeader
                    title='تاریخچه شرکت ما'
                />
                <BreadCrumb
                    page='تاریخچه'
                />
                <section
                    className='my-[60px] md:my-[100px]'>
                    <div className="container">
                        <div
                            className='relative pr-10 md:pr-0 pt-20 before:absolute before:content-[""] before:h-full before:w-0.5 before:bg-[#e9ecef] dark:before:bg-[#6c757d] before:right-5 md:right-auto before:top-0 before:bottom-0 md:before:inset-0 md:before:m-auto'>
                            <span
                                className='absolute top-0 md:left-0 right-0 md:mx-auto border-[2px] border-[#e9ecef] dark:border-[#6c757d] bg-body rounded-full w-10 h-10 flex items-center justify-center'>
                                <svg className='w-6 h-6 text-primary fill-transparent'>
                                    <use href='#star'></use>
                                </svg>
                            </span>
                            <div className='flex justify-center'>
                                <div className='md:w-3/4 flex flex-col gap-x-12 gap-y-6'>
                                    <div className='flex flex-col md:flex-row relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start md:justify-end'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:right-auto md:after:-left-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2002
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/05.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    تاسیس
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row-reverse relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:-right-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2004
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/01.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    شراکت
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start md:justify-end'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:right-auto md:after:-left-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2006
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/06.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    امنیت
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row-reverse relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:-right-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2010
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/04.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    برند
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start md:justify-end'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:right-auto md:after:-left-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2016
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/03.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    جهانی شدن
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row-reverse relative gap-y-6 gap-x-12'>
                                        <div className='md:w-1/2 flex items-start justify-start'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:-right-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    2020
                                </span>
                                        </div>
                                        <div
                                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                                            <div>
                                                <img className='w-full h-full object-cover' src="/images/blogs/02.jpg"
                                                     alt=""/>
                                            </div>
                                            <div className='p-6'>
                                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                                    معروف
                                                </h3>
                                                <p className='mt-4 line-clamp-4'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}