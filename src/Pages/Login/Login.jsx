import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import Symbols from "../../Symbols/Symbols";
import ThemeBox from "../../Components/ThemeBox/ThemeBox";
import {useEffect, useState} from "react";

export default function Login() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.add('light')
            setTheme('light')
        }
    }, []);

    const themeChangeHandler = (event) => {
        event.preventDefault()
        if (document.documentElement.className.includes('dark')) {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
            setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }


    return (
        <>
            <Symbols/>
            <div className='flex flex-col-reverse lg:flex-row lg:h-screen'>
                <div className='basis-7/12 xl:basis-6/12 flex items-center justify-center my-[30px] p-[30px] sm:p-[90px]'>
                    <div className='max-w-sm w-full'>
                        <h4 className='text-title font-IranSansFaNum-Bold text-2xl text-center mb-6'>
                            وارد شدن
                        </h4>
                        <form className='flex flex-col gap-4' action="#">
                            <Input type='text' icon='user' label='ایمیل شما' require={true}
                                   placeholder='ایمیل :'/>
                            <Input type='password' icon='key' label='رمز عبور' require={true} placeholder='رمز عبور :'/>
                            <div className='flex items-center justify-between my-4'>
                                <div className='flex items-center gap-2'>
                                    <Input type='checkbox'/>
                                    <span
                                        className='font-IranSansFaNum-Bold text-title text-xs'>مرا به خاطر بسپار</span>
                                </div>
                                <a className='text-title font-IranSansFaNum-Bold transition-colors text-xs duration-500 hover:text-primary'
                                   href="#">
                                    فراموشی رمز عبور ؟
                                </a>
                            </div>
                            <PrimaryButton className='!flex items-center justify-center' title='ورود'/>
                        </form>
                        <div className='flex flex-col items-center gap-5 mt-5'>
                        <span className='text-title font-IranSansFaNum-Bold'>
                            یا با آن وارد شوید
                        </span>
                            <div className='flex items-center gap-6 w-full'>
                                <a className='flex items-center justify-center gap-2 bg-light-bg rounded-md py-2 w-full transition-all duration-500 hover:bg-[#d4daed] dark:hover:bg-[#364f6b] border border-light-border dark:border-[#494f54]'
                                   href="#">
                                    <svg className='w-4 h-4 text-primary shrink-0'>
                                        <use href='#mdi--facebook'></use>
                                    </svg>
                                    <span className='text-sub-title font-IranSansFaNum-Bold'>
                                    فیسبوک
                                </span>
                                </a>
                                <a className='flex items-center justify-center gap-2 bg-light-bg rounded-md py-2 w-full transition-all duration-500 hover:bg-[#d4daed] dark:hover:bg-[#364f6b] border border-light-border dark:border-[#494f54]'
                                   href="#">
                                    <svg className='w-4 h-4 text-error shrink-0'>
                                        <use href='#google'></use>
                                    </svg>
                                    <span className='text-sub-title font-IranSansFaNum-Bold'>
                                    گوگل
                                </span>
                                </a>
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='text-sub-title text-xs'>
                                    حسابی ندارید؟
                                </span>
                                <a className='text-title hover:text-primary text-md font-IranSansFaNum-Bold transition-colors duration-500' href="#">
                                    ثبت نام کنید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-[400px] h-full bg-login bg-center bg-cover bg-no-repeat'></div>
            </div>
            <a className='h-9 w-9 rounded-md bg-primary text-white flex items-center justify-center fixed left-3 top-8' href="#">
                <svg className='w-4 h-4'>
                    <use href='#home'></use>
                </svg>
            </a>

            <ThemeBox
                theme={theme}
                changeThemeHandler={themeChangeHandler}
                setTheme={setTheme}
            />
        </>
    )
}