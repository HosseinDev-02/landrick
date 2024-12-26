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


    return (
        <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
            <div className='flex items-center justify-between mb-8'>
                <h5 className='font-IranSansFaNum-Bold text-xl text-title'>
                    پیام :
                </h5>
                <PrimaryButton className='flex-row-reverse' icon='plus' title='ایجاد'/>
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
                        <PrimaryButton title='اقدام' icon='angle-down'/>
                    </li>
                    {
                        messages.map(item => (
                            <li key={item.id} className='flex items-center justify-start gap-4 p-4 odd:bg-light-bg even:bg-body'>
                                <input onChange={() => checkboxHandleCheck(item.id)} checked={checkedItems.has(item.id)}
                                    className='w-4 h-4 appearance-none border checked:bg-check border-black/25 rounded'
                                    type="checkbox"/>
                                <div className='flex items-center gap-4'>
                                    <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
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
        </div>
    )
}