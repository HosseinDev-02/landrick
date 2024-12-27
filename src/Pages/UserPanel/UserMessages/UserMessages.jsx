import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import {useState} from "react";

export default function UserMessages() {
    const [selectAll, setSelectAll] = useState(false)
    const [checkedItems, setCheckedItems] = useState(new Set())
    const messages = [
        {
            id: 1,
            username: 'کارلوس پویول',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/04.jpg'
        },
        {
            id: 2,
            username: 'لوییس سوارز',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/05.jpg'
        },
        {
            id: 3,
            username: 'متو کواچیچ',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/06.jpg'
        },
        {
            id: 4,
            username: 'داروین نونیز',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/07.jpg'
        },
        {
            id: 5,
            username: 'رایان گیگز',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/04.jpg'
        },
        {
            id: 6,
            username: 'لبرون جیمز',
            msg: 'این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. ساختگی',
            userImg: '/images/team/05.jpg'
        },
    ]
    const [modalShow, setModalShow] = useState(false)
    const [actionModalShow, setActionModalShow] = useState(false)
    
    

    // تابع هندل کردن چک باکس انتخاب همه
    const handelSelectAll = () =>  {
        if(selectAll) {
            setCheckedItems(new Set())
        }else {
            // میاد ای دی ایتم ها رو میگیره و درون ست ذخیره میکنه
            const allDs = new Set(messages.map(item => item.id))
            setCheckedItems(allDs)
        }
        setSelectAll(prevState => !prevState)
    }

    // تابع هندل کردن چک باکس ها به جز همه

    const checkboxHandleCheck = (id) => {
        // پر کردن ایتم های چک شده درون ست
        const updatedCheckedItems = new Set(checkedItems)

        // اگر ایتم چگ شده بود غیر فعال می کنه اگر نبود فعال میکنه
        // با استفاده از ای دی ایتم میاد چک میکنه که ایا وجود داره یا نه اگر داشت حذف میکنه از ست و اگرم نداشت داخل ست اد میکنه
        if(updatedCheckedItems.has(id)){
            updatedCheckedItems.delete(id)
        }else {
            updatedCheckedItems.add(id)
        }

        setCheckedItems(updatedCheckedItems)
        // چک میکنه که اگر همه ایتم ها انتخاب شده بود همه رو فعال کنه
        setSelectAll(updatedCheckedItems.size === messages.length)
    }

    // const sendMsgModalHandler = () => {
    //     setModalShow(true)
    // }


    const sendMsgModalHandler = (event) => {
        event.preventDefault()
        setModalShow(prevState => !prevState)
    }

    const actionModalHandler = event => {
        event.preventDefault()
        setActionModalShow(prevState => !prevState)
    }


    return (
        <>
            <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
                <div className='flex items-center justify-between mb-8'>
                    <h5 className='font-IranSansFaNum-Bold text-xl text-title'>
                        پیام:
                    </h5>
                    <div>
                        <PrimaryButton onClickHandler={event => sendMsgModalHandler(event)} className='flex-row-reverse' icon='plus'
                                       title='ایجاد'/>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col divide-y divide-[#e9ecef]'>
                        <li className='flex items-center justify-between p-4 odd:bg-light-bg even:bg-body'>
                            <div className='flex items-center gap-2'>
                                <input checked={selectAll} onChange={handelSelectAll}
                                       className='w-4 h-4 appearance-none border checked:bg-check border-black/25 rounded'
                                       type="checkbox"/>
                                <span className='font-IranSansFaNum-Bold text-title text-sm'>انتخاب همه</span>
                            </div>
                            <div className='relative'>
                                <PrimaryButton onClickHandler={event => actionModalHandler(event)} title='اقدام'
                                               icon='angle-down'/>
                                <div className={`bg-body shadow-sm shadow-sub-title/15 rounded-md absolute left-0 top-full w-[160px] ${actionModalShow ? 'block' : 'hidden'}`}>
                                    <ul className='py-2 text-[#212529] bg-body rounded-md relative before:bg-body before:w-3.5 before:h-3.5 before:content-[""] before:absolute before:rotate-[225deg] before:-top-[5px] before:right-6 before:shadow-[2px_2px_2px_-1px_rgba(22,28,45,0.15)]'>
                                        <li className='px-4 py-1 hover:text-primary transition-all duration-500'>
                                            <a className='flex items-center gap-1' href="#">
                                                <svg className='w-4 h-4'>
                                                    <use href='#eye-hidden'></use>
                                                </svg>
                                                <span>
                                            خوانده شده
                                        </span>
                                            </a>
                                        </li>
                                        <li className='px-4 py-1 hover:text-primary transition-all duration-500'>
                                            <a className='flex items-center gap-1' href="#">
                                                <svg className='w-4 h-4'>
                                                    <use href='#answer'></use>
                                                </svg>
                                                <span>
                                            پاسخ
                                        </span>
                                            </a>
                                        </li>
                                        <li className='px-4 py-1 hover:text-primary transition-all duration-500'>
                                            <a className='flex items-center gap-1' href="#">
                                                <svg className='w-4 h-4'>
                                                    <use href='#send'></use>
                                                </svg>
                                                <span>
                                            ارسال
                                        </span>
                                            </a>
                                        </li>
                                        <li className='px-4 pt-2 text-error border-t border-t-light-border'>
                                            <a className='flex items-center gap-1' href="#">
                                                <svg className='w-4 h-4'>
                                                    <use href='#trash'></use>
                                                </svg>
                                                <span>
                                            حذف کردن
                                        </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {
                            messages.map(item => (
                                <li key={item.id}
                                    className='flex items-start md:items-center justify-start gap-4 p-4 odd:bg-light-bg even:bg-body'>
                                    <input onChange={() => checkboxHandleCheck(item.id)}
                                           checked={checkedItems.has(item.id)}
                                           className='shrink-0 w-4 h-4 appearance-none border checked:bg-check border-black/25 rounded'
                                           type="checkbox"/>
                                    <div className='flex items-start md:items-center gap-4'>
                                        <div className='shrink-0 w-[45px] h-[45px] rounded-full overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={item.userImg} alt=""/>
                                        </div>
                                        <div className='flex flex-col gap-2 items-start'>
                                            <h6 className='font-IranSansFaNum-Bold text-title'>
                                                {item.username}
                                            </h6>
                                            <span>
                                    {item.msg}
                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center justify-between mt-6'>
                <span className='font-IranSansFaNum-Bold'>
                    نمایش 8 از 33
                </span>
                    <PrimaryButton title='نمایش بیشتر'/>
                </div>
            </div>

            <div onClick={() => setModalShow(false)} className={`transition-all duration-500 ${modalShow ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50`}>
                <div className={`w-full h-fit bg-body p-6 rounded-md shadow-sm shadow-sub-title/15 transition-all duration-500 max-w-4xl relative ${modalShow ? 'top-0' : '-top-40'}`}>
                    <div className='flex items-center justify-between pb-6 border-b border-b-light-border mb-6'>
                        <span className='text-title font-IranSansFaNum-Bold'>
                            ارسال پیام
                        </span>
                        <span onClick={() => setModalShow(false)} className='cursor-pointer transition-colors duration-300 hover:text-error'>
                            <svg className='w-6 h-6'>
                                <use href='#multiply'></use>
                            </svg>
                        </span>
                    </div>
                    <form className='flex flex-col items-start gap-6' action="#">
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='flex gap-1 items-center text-title font-IranSansFaNum-Bold text-sm'>
                                نام شما
                                <span className='text-error text-sm'>
                                        *
                                    </span>
                            </div>
                            <div
                                className='flex items-center gap-2 relative h-10 w-full'>
                                <span className='shrink-0 absolute right-4 text-title'>
                                    <svg className='w-4 h-4'>
                                        <use href='#user'></use>
                                    </svg>
                                </span>
                                <input
                                    className='outline-none border border-light-border rounded-md dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 w-full text-sub-title h-full text-sm pr-12 py-1.5 pl-1.5'
                                    placeholder='نام :'
                                    type="text"/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <span className='text-title font-IranSansFaNum-Bold text-sm'>
                                موضوع
                            </span>
                            <div
                                className='flex items-center gap-2 relative h-10 w-full'>
                                <span className='shrink-0 absolute right-4 text-title'>
                                    <svg className='w-4 h-4'>
                                        <use href='#book'></use>
                                    </svg>
                                </span>
                                <input
                                    className='outline-none border border-light-border rounded-md dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 w-full text-sub-title h-full text-sm pr-12 py-1.5 pl-1.5' placeholder='موضوع :'
                                       type="text"/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='flex gap-1 items-center text-title font-IranSansFaNum-Bold text-sm'>
                                پیام
                                <span className='text-error text-sm'>
                                        *
                                    </span>
                            </div>
                            <div className='relative'>
                                <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                    <use href='#comment'></use>
                                </svg>
                                <textarea
                                    className='outline-none dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 h-36 w-full rounded-md border border-light-border pr-12 py-1.5 pl-3 text-sm'
                                    placeholder='پیام :'></textarea>
                            </div>
                        </div>
                        <PrimaryButton className='' title='ارسال کنید'/>
                    </form>
                </div>
            </div>
        </>
    )
}