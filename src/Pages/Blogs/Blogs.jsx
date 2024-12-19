import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import BlogBox from "../../Components/BlogBox/BlogBox";
import SideBarBox from "../../Components/SideBarBox/SideBarBox";
import PostBox from "../../Components/PostBox/PostBox";
import CloudTag from "../../Components/CloudTag/CloudTag";
import SocialMediaBox from "../../Components/SocialMediaBox/SocialMediaBox";

export default function Blogs() {
    return (
        <>

            <Header changeMode={true}/>
            <main>
                <PageHeader title='وبلاگ'/>
                <BreadCrumb page='وبلاگ' items={[
                    {id: 1, title: 'لندریک'},
                    {id: 2, title: 'صفحه'},
                    {id: 3, title: 'وبلاگ'}
                ]}/>
                <section className='mt-14 mb-[60px] md:mb-[100px]'>
                    <div className="container">
                        <div className='grid grid-cols-12 gap-6 items-start'>
                            {/* blogs content */}
                            <div className='col-span-12 md:col-span-6 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <BlogBox
                                    title='برنامه های خود را به روش خود طراحی کنید'
                                    img='/images/blogs/01.jpg'
                                    author='کالوین لورس'
                                    date='مهر 1403'
                                    comment='8'
                                    like='14'
                                    link='#'
                                />
                                <BlogBox
                                    title='برنامه ها چگونه دنیای اطلاعات را تغییر می دهند'
                                    img='/images/blogs/02.jpg'
                                    author='کالوین لورس'
                                    date='اردیبهشت 1403'
                                    comment='28'
                                    like='50'
                                    link='#'
                                />
                                <BlogBox
                                    title='هوشمندترین برنامه ها برای تجارت و کار'
                                    img='/images/blogs/03.jpg'
                                    author='کالوین لورس'
                                    date='مهر 1403'
                                    comment='16'
                                    like='33'
                                    link='#'
                                />
                                <BlogBox
                                    title='برنامه های خود را به روش خود طراحی کنید'
                                    img='/images/blogs/04.jpg'
                                    author='کالوین لورس'
                                    date='مهر 1403'
                                    comment='16'
                                    like='33'
                                    link='#'
                                />
                                <BlogBox
                                    title='هوشمندترین برنامه ها برای تجارت و کار'
                                    img='/images/blogs/01.jpg'
                                    author='کالوین لورس'
                                    date='مهر 1403'
                                    comment='16'
                                    like='33'
                                    link='#'
                                />
                                <BlogBox
                                    title='برنامه ها چگونه دنیای اطلاعات را تغییر می دهند'
                                    img='/images/blogs/02.jpg'
                                    author='کالوین لورس'
                                    date='مهر 1403'
                                    comment='16'
                                    like='33'
                                    link='#'
                                />
                            </div>
                            {/*  blogs sidebar  */}
                            <div className='sticky top-24 col-span-12 md:col-span-6 lg:col-span-4 shadow-sm shadow-sub-title/15 rounded-md p-6'>
                                <form
                                    className='pr-3 flex items-center bg-body w-full border border-[#e9ecef] dark:border-[#495057] rounded-md h-10 text-[#212529] dark:text-footer mb-4'
                                    action="#">
                                    <input
                                        className='w-full h-full bg-transparent text-sm outline-none placeholder-[#212529] dark:placeholder-footer'
                                        type="text" placeholder='جستجوی کلمه کلیدی ...'/>
                                    <span className='cursor-pointer py-1.5 px-3'>
                                            <svg className='w-4 h-4 shrink-0'>
                                            <use href='#search'></use>
                                        </svg>
                                        </span>
                                </form>
                                <SideBarBox className='' title='دسته بندیها'>
                                    <div>
                                        <ul className='flex flex-col gap-2.5'>
                                            <li className='text-md text-sub-title flex items-center justify-between'>
                                                <a className='transition-colors duration-500 dark:text-footer dark:hover:text-primary hover:text-primary'
                                                   href="#">
                                                    مالی
                                                </a>
                                                <span>13</span>
                                            </li>
                                            <li className='text-md text-sub-title flex items-center justify-between'>
                                                <a className='transition-colors duration-500 dark:text-footer dark:hover:text-primary hover:text-primary'
                                                   href="#">
                                                    شرکتی
                                                </a>
                                                <span>90</span>
                                            </li>
                                            <li className='text-md text-sub-title flex items-center justify-between'>
                                                <a className='transition-colors duration-500 dark:text-footer dark:hover:text-primary hover:text-primary'
                                                   href="#">
                                                    وبلاگ
                                                </a>
                                                <span>18</span>
                                            </li>
                                            <li className='text-md text-sub-title flex items-center justify-between'>
                                                <a className='transition-colors duration-500 dark:text-footer dark:hover:text-primary hover:text-primary'
                                                   href="#">
                                                    کسب و کار
                                                </a>
                                                <span>20</span>
                                            </li>
                                            <li className='text-md text-sub-title flex items-center justify-between'>
                                                <a className='transition-colors duration-500 dark:text-footer dark:hover:text-primary hover:text-primary'
                                                   href="#">
                                                    سرمایه گذاری
                                                </a>
                                                <span>22</span>
                                            </li>
                                        </ul>
                                    </div>
                                </SideBarBox>
                                <SideBarBox className='mt-8' title='پست های اخیر'>
                                    <div className='flex flex-col gap-[15px]'>
                                        <PostBox
                                            title='مشاوره شرکتی'
                                            img='/images/blogs/01.jpg'
                                            date='اردیبهشت 1400'
                                        />
                                        <PostBox
                                            title='به تعادل باشکوه نگاه کنید'
                                            img='/images/blogs/03.jpg'
                                            date='اردیبهشت 1400'
                                        />
                                        <PostBox
                                            title='تحقیقات مالی'
                                            img='/images/blogs/05.jpg'
                                            date='اردیبهشت 1400'
                                        />
                                    </div>
                                </SideBarBox>
                                <SideBarBox title='برچسب های ابری' className='mt-8'>
                                    <div className='flex gap-3.5 flex-wrap'>
                                        <CloudTag title='کسب و کار'/>
                                        <CloudTag title='مالی'/>
                                        <CloudTag title='بازاریابی'/>
                                        <CloudTag title='سبک زندگی'/>
                                        <CloudTag title='مسافرت'/>
                                        <CloudTag title='دلخوشی'/>
                                        <CloudTag title='عروس'/>
                                        <CloudTag title='صدا'/>
                                        <CloudTag title='زیبایی'/>
                                        <CloudTag title='مدل'/>
                                    </div>
                                </SideBarBox>
                                <SideBarBox className='mt-8' title='دنبال کردن ما'>
                                    <div className='flex gap-1'>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='instagram'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='twitter'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='facebook'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='linkedin'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='github'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='gitlab'/>
                                        <SocialMediaBox className='text-sub-title border-sub-title hover:bg-primary hover:border-primary hover:text-white dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white' link='#' icon='youtube'/>
                                    </div>
                                </SideBarBox>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>

        </>
    )
}