import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import LightButton from "../../../Components/LightButton/LightButton";
import Input from "../../../Components/Input/Input";
import UserPanelSettingItem from "../../../Components/UserPanelSettingItem/UserPanelSettingItem";

export default function UserPanelSetting() {

    const accountNotifications = [
        {id: 1, caption: 'وقتی کسی از من نام می برد'},
        {id: 2, caption: 'وقتی کسی مرا تعقیب می کند'},
        {id: 3, caption: 'هنگامی که فعالیت من را به اشتراک می گذارد'},
        {id: 4, caption: 'وقتی کسی به من پیام می دهد'},
    ]

    const marketingNotifications = [
        {id: 1, caption: 'یک فروش یا تبلیغ وجود دارد'},
        {id: 2, caption: 'اخبار شرکت'},
        {id: 3, caption: 'همشاغل هفتگی'},
        {id: 4, caption: 'اخبار را لغو اشتراک کنید'},
    ]


    return (
        <>
            <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start'>
                    <h5 className='text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-4'>
                        جزئیات شخصی :
                    </h5>
                    <div className='flex flex-col md:flex-row items-center justify-start md:justify-center gap-6'>
                        <div className='w-[110px] h-[110px] rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src="/images/team/06.jpg" alt=""/>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PrimaryButton title='تغییر تصویر'/>
                            <LightButton
                                className='!bg-body !border-primary !text-primary hover:!bg-primary hover:!text-white'
                                title='حذف'/>
                        </div>
                    </div>
                </div>
                <div className='mt-6 mb-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <Input type='text' icon='user' label='نام' placeholder='نام اول :'/>
                        <Input type='text' icon='user-check' label='نام خانوادگی' placeholder='نام خانوادگی :'/>
                        <Input type='text' icon='envelope' label='ایمیل' placeholder='ایمیل :'/>
                        <Input type='text' icon='bookmark' label='اشتغال' placeholder='اشتغال :'/>
                    </div>
                    <Input type='textarea' icon='comment' label='توضیحات' placeholder='توضیحات :' className='resize-none'/>
                </div>
                <PrimaryButton title='ذخیره تغییرات'/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div>
                        <h5 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title mb-6'>
                            اطلاعات تماس
                        </h5>
                        <div className='mb-6 flex flex-col gap-4'>
                            <Input type='text' icon='phone' label='شماره تلفن :' placeholder='تلفن :'/>
                            <Input type='text' icon='internet' label='وب سایت :' placeholder='آدرس :'/>
                        </div>
                        <PrimaryButton title='افزودن'/>
                    </div>
                    <div>
                        <h5 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title mb-6'>
                            تغییر رمز عبور :
                        </h5>
                        <div className='mb-6 flex flex-col gap-4'>
                            <Input type='text' icon='key' label='رمز عبور قدیمی :' placeholder='رمز قدیمی :'/>
                            <Input type='text' icon='key' label='رمز عبور جدید :' placeholder='رمز جدید :'/>
                            <Input type='text' icon='key' label='تایید رمز عبور جدید :' placeholder='رمز عبور جدید :'/>
                        </div>
                        <PrimaryButton title='ذخیره رمز عبور'/>
                    </div>
                </div>
            </div>
            <div className='shadow-sm shadow-sub-title/15 rounded-md mt-6'>
                <div className='p-6 border-b border-b-light-border dark:border-b-[#495057]'>
                    <h5 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                        اعلان های حساب :
                    </h5>
                </div>
                <ul className='w-full flex flex-col divide-y divide-light-border dark:divide-[#495057] px-6'>
                    {
                        accountNotifications.map(notification => (
                            <UserPanelSettingItem key={notification.id} caption={notification.caption}/>
                        ))
                    }
                </ul>
            </div>
            <div className='shadow-sm shadow-sub-title/15 rounded-md mt-6'>
                <div className='p-6 border-b border-b-light-border dark:border-b-[#495057]'>
                    <h5 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                        اعلان های بازاریابی :
                    </h5>
                </div>
                <ul className='w-full flex flex-col divide-y divide-light-border dark:divide-[#495057] px-6'>
                    {
                        marketingNotifications.map(notification => (
                            <UserPanelSettingItem key={notification.id} caption={notification.caption}/>
                        ))
                    }
                </ul>
            </div>
            <div className='shadow-sm shadow-sub-title/15 rounded-md mt-6'>
                <div className='p-6 border-b border-b-light-border dark:border-b-[#495057]'>
                    <h5 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-error'>
                        حذف اکانت :
                    </h5>
                </div>
                <div className='flex flex-col items-start gap-6 p-6'>
                    <span className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                        آیا می خواهید حساب را حذف کنید؟ لطفاً زیر دکمه "حذف" را فشار دهید
                    </span>
                    <PrimaryButton className='!bg-error !border-error shadow-error/15' title='حذف اکانت'/>
                </div>
            </div>
        </>
    )
}