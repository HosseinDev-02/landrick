import Symbols from "../../Symbols/Symbols";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ThemeBox from "../ThemeBox/ThemeBox";
import {useEffect, useState} from "react";

export default function UserAuth({ title, bg, children }) {
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
                            {title}
                        </h4>
                        {
                            children
                        }
                    </div>
                </div>
                <div className={`w-full min-h-[400px] h-full bg-center bg-cover bg-no-repeat ${bg}`}></div>
            </div>
            <a className='h-9 w-9 rounded-md bg-primary text-white flex items-center justify-center fixed left-3 top-8'
               href="/">
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