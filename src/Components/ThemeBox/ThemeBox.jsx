import {useState} from "react";

export default function ThemeBox({ changeThemeHandler, theme, setTheme }) {

    const [showBox, setShowBox] = useState(false)

    const ThemeBoxShowHandler = () => {
        setShowBox(prevState => !prevState)
    }
    return (
        <div className={`fixed top-32 flex items-start transition-all duration-500 ${showBox ? 'left-0' : '-left-48'} z-50`}>
            <span onClick={ThemeBoxShowHandler} className='w-10 h-10 rounded-tr-3xl shadow-sm shadow-sub-title/15 rounded-br-3xl bg-body text-primary flex items-center justify-center cursor-pointer'>
                <svg className='w-6 h-6 animate-spin duration-[1.5s]'>
                    <use href='#setting'></use>
                </svg>
            </span>
            <div className='w-48 bg-light-bg shadow-sm shadow-sub-title/15 h-48 flex flex-col justify-between items-center px-6 py-4'>
                <span className='font-IranSansFaNum-Bold text-title inline-block text-center'>
                رنگ خود را انتخاب کنید
            </span>
                {
                    theme === 'dark' ? (
                        <button onClick={changeThemeHandler} className='flex items-center gap-2 justify-center rounded-md bg-white w-full py-2'>
                            <svg className='w-5 h-5 text-[#161c2d]'>
                                <use href='#sun'></use>
                            </svg>
                            <span className='font-IranSansFaNum-Bold text-[#161c2d] text-xs'>تم روشن</span>
                        </button>
                    ) : (
                        <button onClick={changeThemeHandler}
                                className='flex items-center gap-2 justify-center rounded-md bg-[#253649] w-full py-2'>
                            <svg className='w-5 h-5 text-white'>
                                <use href='#moon'></use>
                            </svg>
                            <span className='font-IranSansFaNum-Bold text-white text-xs'>تم تیره</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}