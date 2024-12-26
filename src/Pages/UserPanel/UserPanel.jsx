import {Link, Outlet, useMatch} from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SocialMediaBox from "../../Components/SocialMediaBox/SocialMediaBox";
import {useEffect, useState} from "react";

export default function UserPanel () {

    const match = useMatch("/:dashboard/*");
    const [activeTab, setActiveTab] = useState(match.params['*'])


    useEffect(() => {
        console.log(match)
        setActiveTab(match.params['*'])
    }, [match]);

    
    // -translate-y-[300px] md:-translate-y-[125px]

    return (
        <>
            <Header/>

            <main>
                <div id='user-panel-header' className='bg-primary flex items-center justify-center py-[100px]'>
                    <div className="container">
                        <div
                            className='w-full flex flex-col md:flex-row items-center gap-8 md:justify-between bg-body shadow-sm shadow-sub-title/15 rounded-md p-6 relative top-[159px]'>
                            <div className='w-[140px] h-[140px] rounded-full overflow-hidden shrink-0'>
                                <img className='w-full h-full object-cover' src="/images/team/06.jpg"
                                     alt=""/>
                            </div>
                            <div
                                className='flex flex-col md:flex-row items-center md:items-end md:justify-between w-full'>
                                <div className='flex gap-y-2 flex-col items-center md:items-start'>
                                    <h4 className='text-title font-IranSansFaNum-Bold text-3xl'>
                                        جعفر عباسی
                                    </h4>
                                    <span className='font-IranSansFaNum-Bold'>
                                            توسعه وب
                                        </span>
                                    <div className='flex items-center gap-4 mt-2 md:mt-4'>
                                        <a className='flex items-center gap-2' href="#">
                                            <svg className='w-4 h-4'>
                                                <use href='#instagram'></use>
                                            </svg>
                                            <span>jafar_abbasi</span>
                                        </a>
                                        <a className='flex items-center gap-2' href="#">
                                            <svg className='w-4 h-4'>
                                                <use href='#linkedin'></use>
                                            </svg>
                                            <span>جعفر عباسی</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-1 mt-2 md:mt-0'>
                                    <SocialMediaBox
                                        className='border-footer text-footer hover:bg-primary hover:text-white hover:border-primary'
                                        icon='linkedin'/>
                                    <SocialMediaBox
                                        className='border-footer text-footer hover:bg-primary hover:text-white hover:border-primary'
                                        icon='instagram'/>
                                    <SocialMediaBox
                                        className='border-footer text-footer hover:bg-primary hover:text-white hover:border-primary'
                                        icon='twitter'/>
                                    <SocialMediaBox
                                        className='border-footer text-footer hover:bg-primary hover:text-white hover:border-primary'
                                        icon='youtube'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <section className='pt-[100px] pb-[60px] md:pb-[100px]'>
                    <div className="container">
                        <div
                            className='flex flex-col gap-6 rounded-md'>
                            <div className='flex flex-col lg:flex-row items-start gap-6'>
                                {/* sidebar */}
                                <div className='w-full lg:basis-1/3 shadow-sm shadow-sub-title/15 rounded-md p-6'>
                                    <div>
                                        <h5 className='text-title font-IranSansFaNum-Bold text-xl mb-6'>فالوور :</h5>
                                        <div className='flex'>
                                            <div className='w-1/2 flex flex-col items-center gap-1'>
                                                <svg className='w-5 h-5 text-primary'>
                                                    <use href='#add-user'></use>
                                                </svg>
                                                <span className='text-xl text-title font-IranSansFaNum-Bold'>
                                                    2469
                                                </span>
                                                <span>
                                                    دنبال کننده
                                                </span>
                                            </div>
                                            <div className='w-1/2 flex flex-col items-center gap-1'>
                                                <svg className='w-5 h-5 text-primary'>
                                                    <use href='#users'></use>
                                                </svg>
                                                <span className='text-xl text-title font-IranSansFaNum-Bold'>
                                                    257
                                                </span>
                                                <span>
                                                    دنبال می کنید
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h5 className='text-title font-IranSansFaNum-Bold text-xl mb-6'>پروژه :</h5>
                                        <div className='flex flex-col gap-2'>
                                            <span className='font-IranSansFaNum-Bold'>
                                                پیش رفتن
                                            </span>
                                            <div className='rounded-md h-2 bg-[#e9ecef]'>
                                                <div className='bg-primary w-[60%] h-full rounded-md relative'>
                                                <span
                                                    className='absolute -left-4 -top-7 font-IranSansFaNum-Bold'>24 / 48</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-8 py-[15px]'>
                                        <ul className='flex flex-col gap-3.5'>
                                            <li>
                                                <Link onClick={() => setActiveTab('profile')}
                                                      className={`user-panel-menu-item ${activeTab === 'profile' ? 'text-white bg-primary' : ''}`}
                                                      to='profile'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#dashboard'></use>
                                                    </svg>
                                                    <span>
                                                    پروفایل
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setActiveTab('members')}
                                                      className={`user-panel-menu-item ${activeTab === 'members' && 'text-white bg-primary'}`}
                                                      to='members'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#users-alt'></use>
                                                    </svg>
                                                    <span>
                                                    اعضا
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setActiveTab('projects')}
                                                      className={`user-panel-menu-item ${activeTab === 'projects' && 'text-white bg-primary'}`}
                                                      to='projects'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#file-alt'></use>
                                                    </svg>
                                                    <span>
                                                    نمونه کار
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setActiveTab('messages')}
                                                      className={`user-panel-menu-item ${activeTab === 'messages' && 'text-white bg-primary'}`}
                                                      to='messages'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#envelope-star'></use>
                                                    </svg>
                                                    <span>
                                                    پیام ها
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setActiveTab('transactions')}
                                                      className={`user-panel-menu-item ${activeTab === 'transactions' && 'text-white bg-primary'}`}
                                                      to='transactions'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#transaction'></use>
                                                    </svg>
                                                    <span>
                                                    پرداخت ها
                                                </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setActiveTab('')}
                                                      className={`flex items-center gap-2 font-IranSansFaNum-Bold text-title h-[52px] rounded-md shadow-sm shadow-sub-title/15 px-6 hover:bg-primary hover:text-white transition-all duration-500`}
                                                      to='#'>
                                                    <svg className='w-6 h-6'>
                                                        <use href='#power'></use>
                                                    </svg>
                                                    <span>
                                                    خروج
                                                </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mt-8'>
                                        <h5 className='text-title font-IranSansFaNum-Bold text-xl mb-6'>دنبال کردن ما :</h5>
                                        <div className='flex items-center gap-1'>
                                            <SocialMediaBox className='social-media' icon='instagram'/>
                                            <SocialMediaBox className='social-media' icon='linkedin'/>
                                            <SocialMediaBox className='social-media' icon='twitter'/>
                                            <SocialMediaBox className='social-media' icon='github'/>
                                            <SocialMediaBox className='social-media' icon='youtube'/>
                                            <SocialMediaBox className='social-media' icon='gitlab'/>
                                        </div>
                                    </div>
                                </div>
                                {/* content */}
                                <div className='w-full lg:basis-2/3'>
                                    <Outlet/>
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