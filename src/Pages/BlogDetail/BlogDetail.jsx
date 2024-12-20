import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import SocialMediaBox from "../../Components/SocialMediaBox/SocialMediaBox";
import Comment from "../../Components/Comment/Comment";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

export default function BlogDetail() {
    return (
        <>
            <Header/>
            <main>
                <PageHeader titleStyle='text-white text-3xl/[45px] max-w-[326px] w-full' className='bg-center' title='هوشمندترین برنامه ها برای کسب و کار شما' img='/images/1.jpg'/>
                <BreadCrumb page='جزئیات وبلاگ' items={[
                    {id: 1, title: 'لندریک'},
                    {id: 2, title: 'وبلاگ'},
                    {id: 3, title: 'جزئیات وبلاگ'}
                ]}/>
                <section className='mt-14 mb-[60px] md:mb-[100px]'>
                    <div className="container">
                        <div className='flex justify-center'>


                            <div className='w-full md:basis-5/6 flex'>
                                <div className='basis-1/6 hidden md:flex justify-center items-start'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h5 className='text-title font-IranSansFaNum-Bold mb-4'>
                                            اشتراک
                                        </h5>
                                        <div className='flex flex-col gap-2'>
                                            <SocialMediaBox
                                                className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white'
                                                link='#' icon='instagram'/>
                                            <SocialMediaBox
                                                className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white'
                                                link='#' icon='twitter'/>
                                            <SocialMediaBox
                                                className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white'
                                                link='#' icon='facebook'/>
                                            <SocialMediaBox
                                                className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white'
                                                link='#' icon='linkedin'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:basis-5/6'>
                                    {/* blog introduction caption */}
                                    <p>
                                        این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متن ساختگی به
                                        عنوان 'متن پر نیز شناخته می شود'. گفته می شود که آهنگسازان آهنگ های گذشته از متن
                                        ساختگی به عنوان شعر استفاده می کردند هنگام نوشتن ملودی به منظور داشتن متن
                                        "آماده" برای آواز خواندن با ملودی.
                                    </p>
                                    {/* blog image wrapper */}
                                    <div>
                                        <div className='my-6 flex items-center justify-between'>
                                            <div className='flex items-center gap-1'>
                                                <svg className='w-4 h-4 text-sub-title'>
                                                    <use href='#user'></use>
                                                </svg>
                                                <span>
                                                    کالوین لورس
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <svg className='w-4 h-4 text-sub-title'>
                                                    <use href='#calendar-alt'></use>
                                                </svg>
                                                <span>
                                                    اردیبهشت 1400
                                                </span>
                                            </div>
                                        </div>
                                        <div className='rounded-md overflow-hidden'>
                                            <img className='w-full h-full object-cover' src="/images/blogs/07.jpg"
                                                 alt="هوشمندترین برنامه ها برای کسب و کار شما"/>
                                        </div>
                                    </div>
                                {/*  blog caption  */}
                                    <div className='mt-6'>
                                        <h3 className='text-title text-xl mb-2 font-IranSansFaNum-Bold'>
                                            صبح ها فقط به دلیل راز یک زندگی فوق العاده موفق است
                                        </h3>
                                        <p>
                                            به دلیل استفاده گسترده از آن به عنوان متن پر کننده برای طرح بندی, غیرقابل خواندن از اهمیت زیادی برخوردار است: ادراک انسان برای شناسایی الگوها و تکرارهای خاص در متن تنظیم شده است. اگر توزیع حروف و کلمات تصادفی باشد ، خواننده حواس او را پرت نمی کند از قضاوت بی طرف در مورد تأثیر بصری و خوانایی انواع حروف (تایپوگرافی) ، یا توزیع متن در صفحه (طرح یا ناحیه نوع).
                                        </p>
                                    </div>
                                    {/*  blog comments  */}

                                    <div className='mt-6'>
                                        <h3 className='font-IranSansFaNum-Bold text-xl text-title mb-2'>
                                            نظرات :
                                        </h3>
                                        <div className='pr-4 md:pr-8 space-y-6 pt-4'>
                                            <Comment
                                                answer={false}
                                                userImg='/images/team/08.jpg'
                                                userName='لورنزو پیترسون'
                                                commentDate='اردیبهشت 1400 - ساعت 14:40 بعد ظهر'
                                                commentText='" تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده اند, با شوخ طبعی تزریق شده "'
                                            />
                                            <Comment
                                                answer={true}
                                                userImg='/images/team/05.jpg'
                                                userName='لورنزو پیترسون'
                                                commentDate='اردیبهشت 1400 - ساعت 14:40 بعد ظهر'
                                                commentText='" تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده اند, با شوخ طبعی تزریق شده "'
                                                adminImg='/images/team/06.jpg'
                                                adminName='تامی کاماچو'
                                                answerDate='خرداد 1400 - ساعت 14:40 بعد ظهر'
                                                answerText='" تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده اند, با شوخ طبعی تزریق شده "'
                                            />
                                            <Comment
                                                answer={false}
                                                userImg='/images/team/07.jpg'
                                                userName='لورنزو پیترسون'
                                                commentDate='اردیبهشت 1400 - ساعت 14:40 بعد ظهر'
                                                commentText='" تعداد زیادی از معابر لورم اپیسون در دسترس است ، اما اکثر آنها به نوعی دچار تغییر شده اند, با شوخ طبعی تزریق شده "'
                                            />
                                        </div>
                                    </div>
                                {/*  blog sent comment  */}
                                    <div className='mt-6'>
                                        <h3 className='text-title font-IranSansFaNum-Bold text-xl mb-4'>
                                             ارسال نظر :
                                        </h3>
                                        <form action="#">
                                            <h4 className='text-sm font-IranSansFaNum-Bold text-title mb-2'>
                                                نظر شما
                                            </h4>
                                            <div className='relative'>
                                                <svg className='w-4 h-4 absolute right-4 top-2 text-title'>
                                                    <use href='#comment'></use>
                                                </svg>
                                                <textarea className='outline-none dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 h-36 w-full rounded-md border border-light-border pr-12 py-1.5 pl-3 text-sm' placeholder='کامنت شما'></textarea>
                                            </div>
                                            <div className='grid grid-cols-2 gap-6 mt-2.5 mb-4'>
                                                <div>
                                                    <label className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                                        نام <span className='text-error'>*</span>
                                                    </label>
                                                    <div className='relative'>
                                                        <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                            <use href='#user'></use>
                                                        </svg>
                                                        <input placeholder='نام' type="text"
                                                               className='bg-body outline-none focus:border-primary transition-all duration-500 h-10 w-full rounded-md border border-light-border dark:border-[#495057] dark:focus:border-primary pr-12 p-1.5 pl-3 text-sm'/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                                        ایمیل <span className='text-error'>*</span>
                                                    </label>
                                                    <div className='relative'>
                                                        <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                            <use href='#envelope'></use>
                                                        </svg>
                                                        <input placeholder='ایمل' type="email"
                                                               className='bg-body dark:border-[#495057] dark:focus:border-primary outline-none focus:border-primary transition-all duration-500 h-10 w-full rounded-md border border-light-border pr-12 p-1.5 pl-3 text-sm'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <PrimaryButton title='ارسال پیام' className='!flex justify-center'/>
                                        </form>
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