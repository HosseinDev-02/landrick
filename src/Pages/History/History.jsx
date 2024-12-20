import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import HistoryBox from "../../Components/HistoryBox/HistoryBox";

export default function History() {
    return (
        <>
            <Header changeMode={true}/>
            <main>
                <PageHeader
                    title='تاریخچه شرکت ما'
                    bgColor='rgb(var(--color-light-bg))'
                />
                <BreadCrumb
                    page='تاریخچه'
                    items={[
                        {id: 1, title: 'لندریک'},
                        {id: 2, title: 'صفحه'},
                        {id: 3, title: 'تاریخچه'},
                    ]}
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
                                    <HistoryBox
                                        img='/images/blogs/01.jpg'
                                        direction='left'
                                        title='تاسیس'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2002}
                                    />
                                    <HistoryBox
                                        img='/images/blogs/02.jpg'
                                        direction='right'
                                        title='شراکت'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2002}
                                    />
                                    <HistoryBox
                                        img='/images/blogs/03.jpg'
                                        direction='left'
                                        title='امنیت'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2010}
                                    />
                                    <HistoryBox
                                        img='/images/blogs/04.jpg'
                                        direction='right'
                                        title='برند'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2016}
                                    />
                                    <HistoryBox
                                        img='/images/blogs/05.jpg'
                                        direction='left'
                                        title='جهانی شدن'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2020}
                                    />
                                    <HistoryBox
                                        img='/images/blogs/06.jpg'
                                        direction='right'
                                        title='معروف'
                                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده
                                                    از
                                                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که
                                                    لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                    هدف
                                                    بهبود
                                                    ابزارهای کاربردی می باشد.,'
                                        year={2024}
                                    />
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