import Symbols from "../../Symbols/Symbols";
import {useEffect, useRef, useState} from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LightButton from "../LightButton/LightButton";

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)
    const [headerBg, setHeaderBg] = useState(false)

    const header = useRef()
    useEffect(() => {
        window.addEventListener('scroll', e => {
            if(window.scrollY > 100) {
                setHeaderBg(true)
            }else if(window.scrollY === 0) {
                setHeaderBg(false)
            }
        })
    }, []);

    const mobileMenuHandler = () => {
        setShowMobileMenu(prevState => !prevState)
    }

    const mobileSubmenuHandler = (event) => {
        event.preventDefault()
        setShowMobileSubmenu(prevState => !prevState)
    }


    return (<>
        <Symbols/>
        <header ref={header}
            className={`fixed left-0 right-0 flex items-center transition-colors duration-200 z-50 justify-center bg-body lg:bg-transparent shadow-[0_0_3px_rgba(60,72,88,0.15)] ${headerBg && 'lg:!bg-body'}`}>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    {/*  Header Landrick Logo  */}
                    <a className='inline-block leading-[74px]' href="/">
                        {/* Light Logo */}
                        <img className='hidden lg:inline h-6 w-full object-cover' src={`/images/logo/logo-${headerBg ? 'dark' : 'light'}.png`}
                             alt="Landrick Logo"/>
                        {/* Dark Logo */}
                        <img className='inline lg:hidden h-6 w-full object-cover' src="/images/logo/logo-dark.png"
                             alt="Landrick Logo"/>
                    </a>
                    {/*  Header Landrick Menu  */}
                    <ul className={`hidden lg:flex gap-5 child:transition-all ${headerBg ? 'text-sub-title child-hover:text-primary' : 'text-white/50 child-hover:text-white'}`}>
                        <li className={`inline-flex items-center ${headerBg ? 'text-primary' : 'menu-item--active'}`}>
                            <a className='font-IranSansDn-Bold text-xs/[74px] px-[15px]'
                               href="#">صفحه اصلی</a>
                        </li>
                        <li className='inline-flex items-center'>
                            <a className='font-IranSansDn-Bold text-xs/[74px] px-[15px]'
                               href="#">وبلاگ</a>
                        </li>
                        {/* Has Submenu */}
                        <li className='relative group/aboutus'>
                            <a className='flex items-center gap-1 font-IranSansDn-Bold text-xs/[74px] px-[15px]'
                               href="#">
                                <span>درباره ما</span>
                                <svg className='w-6 h-6 group-hover/aboutus:rotate-180 transition-all'>
                                    <use href='#angle-down'></use>
                                </svg>
                            </a>
                            <ul className='flex flex-col w-46 bg-body rounded-md py-[15px] absolute right-0 top-[110%] invisible opacity-0 transition-all group-hover/aboutus:visible group-hover/aboutus:opacity-100 group-hover/aboutus:top-full duration-200'>
                                <li>
                                    <a className='px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block'
                                       href="#">خدمات</a>
                                </li>
                                <li>
                                    <a className='px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block'
                                       href="#">تاریخجه</a>
                                </li>
                                <li>
                                    <a className='px-5 py-2.5 text-xxs text-sub-title font-IranSansFaNum-Bold transition-colors hover:text-primary duration-200 block' href="#">
                                        تیم ما
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='inline-flex items-center'>
                            <a className='font-IranSansDn-Bold text-xs/[74px] px-[15px]'
                               href="#">تماس با ما</a>
                        </li>
                    </ul>
                    <div className='flex items-center gap-4'>
                        {/* Mobile Menu Btn */}
                        <div onClick={mobileMenuHandler} className='lg:hidden cursor-pointer relative w-6 h-4'>
                            <span
                                className={`inline-block h-0.5 bg-title rounded-xl absolute right-0 left-0 transition-all ${showMobileMenu ? 'rotate-45 top-2' : 'top-0'}`}></span>
                            <span
                                className={`h-0.5 bg-title rounded-xl absolute top-2 right-0 left-0 transition-all duration-200 inline-block ${showMobileMenu && 'invisible opacity-0'}`}></span>
                            <span
                                className={`inline-block h-0.5 bg-title rounded-xl absolute right-0 left-0 transition-all ${showMobileMenu ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                        </div>
                        {/* Mobile Menu */}
                        <div
                            className={`fixed top-[74px] left-0 right-0 bg-body transition-all lg:hidden ${showMobileMenu ? 'block border-y border-y-[#f1f3f9]' : 'hidden'}`}>
                            <ul className='flex flex-col pr-2.5'>
                                <li className='mobile-submenu-item--active'>
                                    <a className='px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title'
                                       href="#">صفحه
                                        اصلی</a>
                                </li>
                                <li>
                                    <a className='px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title'
                                       href="#">وبلاگ</a>
                                </li>
                                <li>
                                    {/* Has SubMenu */}
                                    <a onClick={(event) => mobileSubmenuHandler(event)}
                                       className={`flex items-center justify-between px-5 py-2.5 font-IranSansDn-Bold text-xs ${showMobileSubmenu ? 'text-primary' : 'text-sub-title'}`}
                                       href="#">
                                        <span>درباره ما</span>
                                        <svg className={`w-6 h-6 ${showMobileSubmenu && 'rotate-180'}`}>
                                            <use href='#angle-down'></use>
                                        </svg>
                                    </a>
                                    <ul className={`flex-col pr-5 ${showMobileSubmenu ? 'flex' : 'hidden'}`}>
                                        <li>
                                            <a className='font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]'
                                               href="#">خدمات</a>
                                        </li>
                                        <li>
                                            <a className='font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]'
                                               href="#">تاریخجه</a>
                                        </li>
                                        <li>
                                            <a className='font-IranSansDn-Bold text-xxs text-sub-title block px-[15px] py-[7px]'
                                               href="#">تیم ما</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className='px-5 py-2.5 block font-IranSansDn-Bold text-xs text-sub-title'
                                       href="#">تماس
                                        با
                                        ما</a>
                                </li>
                            </ul>
                        </div>
                        {/* Header Register Btn */}
                        {
                            headerBg ? (
                                <PrimaryButton title='ورود/ثبت نام'/>
                            ) : (
                                <LightButton title='ورود/ثبت نام'/>
                            )
                        }
                        {/*<a className={`bg-primary rounded-md border hidden xs:inline-block py-2 px-5 font-IranSansFaNum-Bold text-white gap-2 shadow-btn transition-colors hover:bg-primary-darker ${headerBg ? 'lg:bg-primary lg:hover:bg-primary-darker lg:hover:border-primary-darker lg:shadow-btn lg:text-white border-primary' : 'lg:bg-[#F8F9FC] border-[#f8f9fc] lg:hover:bg-[#d4daed] lg:hover:border-[#d4daed] lg:shadow-[#f8f9fc4d] lg:text-sub-title'}`}*/}
                        {/*   href="#">*/}
                        {/*    ورود / ثبت نام*/}
                        {/*</a>*/}
                    </div>
                </nav>
            </div>
        </header>
    </>)
}