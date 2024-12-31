import BlogBox from "../../../Components/BlogBox/BlogBox";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

export default function Profile() {
    return (
        <div className='p-6'>
            <div className='pb-6 border-b border-b-light-border dark:border-b-[#495057]'>
                <h5 className='text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-2'>
                    جعفر عباسی
                </h5>
                <p>
                    من کار خود را به عنوان یک کارآموز آغاز کرده ام و خودم را اثبات می کنم و با راهنمایی خوب به همه نقاط عطف می رسم و به مدیر پروژه می رسم. در این سفر ، من تمام رویه هایی را می شناسم که من را به یک توسعه دهنده ، رهبر تیم و یک مدیر پروژه خوب تبدیل می کند.
                </p>
            </div>
            <div className='grid md:grid-cols-2 mt-6 space-y-6'>
                <div>
                    <h5 className='text-title text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold mb-6'>
                        جزئیات شخصی :
                    </h5>
                    <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#envelope'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    ایمیل :
                                </span>
                                <a href="#">
                                    mail.example@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#bookmark'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    مهارت ها :
                                </span>
                                <a href="#">
                                    html,css,js
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#bookmark'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    زبان ها :
                                </span>
                                <a href="#">
                                    انگلیسی،فارسی،ترکی
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#internet'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    وبسایت :
                                </span>
                                <a href="#">
                                    www.example.ir
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#gift'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    تاریخ تولد :
                                </span>
                                <a href="#">
                                    1381/03/17
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#map'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    موقعیت :
                                </span>
                                <a href="#">
                                    نمایش در گوگل مپ
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <svg className='w-5 h-5'>
                                <use href='#phone'></use>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                                    تلفن :
                                </span>
                                <a href="#">
                                    (+12) 1254-56-4896
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className='text-title text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                        تجربه :
                    </h5>
                    <div>
                        <div
                            className='flex items-center gap-4 shadow-sm shadow-sub-title/15 rounded-md bg-body p-4 mt-6 transition-all duration-300 hover:shadow-md account-box'>
                            <div className='w-[25px] h-[25px]'>
                                <img className='w-full h-full object-cover' src="/images/acount/Circleci.svg" alt=""/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                                    توسعه وب سینور
                                </h6>
                                <span>
                                    3 سال تجربه
                                </span>
                                <div className='flex'>
                                    <a className='text-primary' href="#">کاریکل</a>
                                    <span>
                                        @لندن
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className='flex items-center gap-4 shadow-sm shadow-sub-title/15 rounded-md bg-body p-4 mt-6 transition-all duration-300 hover:shadow-md account-box'>
                            <div className='w-[25px] h-[25px]'>
                                <img className='w-full h-full object-cover' src="/images/acount/Codepen.svg" alt=""/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                                    طراحی وب
                                </h6>
                                <span>
                                    2 سال تجربه
                                </span>
                                <div className='flex'>
                                    <a className='text-primary' href="#">راست چین</a>
                                    <span>
                                        آمریکا
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className='flex items-center gap-4 shadow-sm shadow-sub-title/15 rounded-md bg-body p-4 mt-6 transition-all duration-300 hover:shadow-md account-box'>
                            <div className='w-[25px] h-[25px]'>
                                <img className='w-full h-full object-cover' src="/images/acount/Gitlab.svg" alt=""/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                                    UI طراح
                                </h6>
                                <span>
                                    2 سال تجربه
                                </span>
                                <div className='flex'>
                                    <a className='text-primary' href="#">گیت لب</a>
                                    <span>
                                        آمریکا
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 pt-6 border-t border-t-light-border dark:border-t-[#495057]'>
                <h5 className='text-title text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                    پست ها و اخبار :
                </h5>
                <div className='grid md:grid-cols-2 gap-6 mt-8'>
                    <BlogBox
                        title='برنامه های خود را به روش خود طراحی کنید'
                        img='/images/blogs/01.jpg'
                        comment={35}
                        link='#'
                        like={28}
                        author='لوییس سوارز'
                        date='17 خرداد 1381'
                    />
                    <BlogBox
                        title='برنامه ها چگونه دنیای اطلاعات را تغییر می دهند'
                        img='/images/blogs/02.jpg'
                        comment={12}
                        link='#'
                        like={8}
                        author='ایوان راکیتیج'
                        date='7 مرداد 1403'
                    />
                </div>
                <PrimaryButton className='mt-8' icon='angle-left' title='نمایش بیشتر'/>
            </div>
        </div>
    )
}