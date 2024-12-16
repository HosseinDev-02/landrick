import {useState} from "react";

export default function AboutusServices() {

    const [serviceItemActive, setServiceItemActive] = useState('Web Development')

    const itemSelectionHandler = (event) => {
        setServiceItemActive(event.target.dataset.item)
    }

    return (
        <section className='bg-light-bg py-[60px] md:py-[100px]'>
            <div className="container">
                <div className='md:grid md:grid-cols-12 md:items-end gap-8'>
                    <div className='w-full md:col-span-8 text-center md:text-right'>
                        <span className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-primary'>خدمات</span>
                        <h2 className='text-2xl md:text-3xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title mt-2'>
                            چه کاری انجام می دهیم؟
                        </h2>
                        <p className='mt-6 max-w-[600px] w-full'>
                            شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                            اتصال به آن نیاز دارید فراهم کند.
                        </p>
                    </div>
                    <div className='md:col-span-4 mt-8 md:mt-0 text-center md:text-right justify-self-center md:justify-self-end'>
                        <a className='text-primary inline-flex items-center justify-end gap-1 font-IranSansFaNum-Bold'
                           href="#">
                            نمایش بیشتر
                            <svg className='w-5 h-5'>
                                <use href='#angle-left'></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-12 mt-8 pt-12 md:gap-8 md:items-start'>
                    <div className='w-full md:col-span-4 bg-body shadow-sm shadow-sub-title/15 p-4 rounded-md'>
                        <ul className='flex flex-col gap-2'>
                            <li onClick={event => itemSelectionHandler(event)} data-item='Web Development' className={`font-IranSansFaNum-Bold dark:font-IranSansDn-Bold h-11 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-500 ${serviceItemActive === 'Web Development' ? 'bg-primary text-white' : 'bg-transparent text-sub-title'}`}>
                                توسعه وب
                            </li>
                            <li onClick={event => itemSelectionHandler(event)} data-item='Database Analysis' className={`font-IranSansFaNum-Bold dark:font-IranSansDn-Bold h-11 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-500 ${serviceItemActive === 'Database Analysis' ? 'bg-primary text-white' : 'bg-transparent text-sub-title'}`}>
                                تحلیل پایگاه داده
                            </li>
                            <li onClick={event => itemSelectionHandler(event)} data-item='Server Security' className={`font-IranSansFaNum-Bold dark:font-IranSansDn-Bold h-11 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-500 ${serviceItemActive === 'Server Security' ? 'bg-primary text-white' : 'bg-transparent text-sub-title'}`}>
                                امنیت سرور
                            </li>
                            <li onClick={event => itemSelectionHandler(event)} data-item='Web Design' className={`font-IranSansFaNum-Bold dark:font-IranSansDn-Bold h-11 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-500 ${serviceItemActive === 'Web Design' ? 'bg-primary text-white' : 'bg-transparent text-sub-title'}`}>
                                طراحی وب
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:col-span-8 p-6 mt-8 md:mt-0 shadow-sm shadow-sub-title/15 rounded-md bg-body'>
                        {/* Web Development Content */}
                        <div className={`${serviceItemActive === 'Web Development' ? 'block opacity-100 animate-fadeIn' : 'hidden opacity-0 animate-fadeOut'}`}>
                            <div className='rounded-md overflow-hidden'>
                                <img className='w-full h-full object-cover' src="/images/aboutus/7.jpg"
                                     alt="Web Development"/>
                            </div>
                            <p className='mt-6 mb-4'>
                                این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متن ساختگی به عنوان
                                'متن پر نیز شناخته می شود'. گفته می شود که آهنگسازان آهنگ های گذشته از متن ساختگی به
                                عنوان شعر استفاده می کردند.
                            </p>
                            <a className='text-primary inline-flex items-center justify-end gap-1'
                               href="#">
                                نمایش بیشتر
                                <svg className='w-5 h-5'>
                                    <use href='#angle-left'></use>
                                </svg>
                            </a>
                        </div>
                        {/* Database Analysis Content */}
                        <div className={`${serviceItemActive === 'Database Analysis' ? 'block opacity-100 animate-fadeIn' : 'hidden opacity-0 animate-fadeOut'}`}>
                            <div className='rounded-md overflow-hidden'>
                                <img className='w-full h-full object-cover' src="/images/aboutus/8.jpg"
                                     alt="Web Development"/>
                            </div>
                            <p className='mt-6 mb-4'>
                                این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متن ساختگی به عنوان
                                'متن پر نیز شناخته می شود'. گفته می شود که آهنگسازان آهنگ های گذشته از متن ساختگی به
                                عنوان شعر استفاده می کردند.
                            </p>
                            <a className='text-primary inline-flex items-center justify-end gap-1'
                               href="#">
                                نمایش بیشتر
                                <svg className='w-5 h-5'>
                                    <use href='#angle-left'></use>
                                </svg>
                            </a>
                        </div>
                        {/* Server Security Content */}
                        <div className={`${serviceItemActive === 'Server Security' ? 'block opacity-100 animate-fadeIn' : 'hidden opacity-0 animate-fadeOut'}`}>
                            <div className='rounded-md overflow-hidden'>
                                <img className='w-full h-full object-cover' src="/images/aboutus/9.jpg"
                                     alt="Web Development"/>
                            </div>
                            <p className='mt-6 mb-4'>
                                این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متن ساختگی به عنوان
                                'متن پر نیز شناخته می شود'. گفته می شود که آهنگسازان آهنگ های گذشته از متن ساختگی به
                                عنوان شعر استفاده می کردند.
                            </p>
                            <a className='text-primary inline-flex items-center justify-end gap-1'
                               href="#">
                                نمایش بیشتر
                                <svg className='w-5 h-5'>
                                    <use href='#angle-left'></use>
                                </svg>
                            </a>
                        </div>
                        {/* Web Design Content */}
                        <div className={`${serviceItemActive === 'Web Design' ? 'block opacity-100 animate-fadeIn' : 'hidden opacity-0 animate-fadeOut'}`}>
                            <div className='rounded-md overflow-hidden'>
                                <img className='w-full h-full object-cover' src="/images/aboutus/12.jpg"
                                     alt="Web Development"/>
                            </div>
                            <p className='mt-6 mb-4'>
                                این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متن ساختگی به عنوان
                                'متن پر نیز شناخته می شود'. گفته می شود که آهنگسازان آهنگ های گذشته از متن ساختگی به
                                عنوان شعر استفاده می کردند.
                            </p>
                            <a className='text-primary inline-flex items-center justify-end gap-1'
                               href="#">
                                نمایش بیشتر
                                <svg className='w-5 h-5'>
                                    <use href='#angle-left'></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}