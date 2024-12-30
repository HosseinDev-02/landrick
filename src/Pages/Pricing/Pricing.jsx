import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import PriceBox from "../../Components/PriceBox/PriceBox";

export default function Pricing() {
    return (
        <>
            <Header changeMode={true}/>
                <main>
                    <PageHeader title='قیمت گذاری' bgColor='rgb(var(--color-light-bg))' titleStyle='text-title'/>
                    <BreadCrumb items={[
                        {id:1, title: 'لندریک'},
                        {id:2, title: 'صفحه'},
                        {id:3, title: 'قیمت گذاری'},
                    ]} page='قیمت گذاری'/>
                    <section className='mt-14 mb-[60px] md:mb-[100px]'>
                        <div className="container">
                            <SectionHeader title='قیمت گذاری'>
                                <p className='max-w-[600px] w-full mx-auto'>
                                    شروع به کار با <span
                                    className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                                    تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                                    اتصال به آن نیاز دارید فراهم کند.
                                </p>
                            </SectionHeader>
                            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 gap-x-3 xl:gap-x-6 pt-8 mt-8'>
                                <PriceBox
                                    title='رایگان'
                                    price={0}
                                    items={[
                                        {id: 1, title: 'دسترسی کامل'},
                                        {id: 2, title: 'امنیت پیشرفته'},
                                        {id: 3, title: 'فایل های منبع'},
                                        {id: 4, title: '1 دامنه رایگان'}
                                    ]}
                                />
                                <PriceBox
                                    title='برای شروع'
                                    price={39}
                                    theBest={true}
                                    items={[
                                        {id: 1, title: 'دسترسی کامل'},
                                        {id: 2, title: 'امنیت پیشرفته'},
                                        {id: 3, title: 'قرار ملاقات رایگان'},
                                        {id: 4, title: 'اقساط رایگان'},
                                        {id: 5, title: 'امنیت پیشرفته'}
                                    ]}
                                />
                                <PriceBox
                                    title='حرفه ای'
                                    price={59}
                                    items={[
                                        {id: 1, title: 'دسترسی کامل'},
                                        {id: 2, title: 'امنیت پیشرفته'},
                                        {id: 3, title: 'فایل های منبع'},
                                        {id: 4, title: '1 دامنه رایگان'}
                                    ]}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}