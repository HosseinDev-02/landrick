import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import LightButton from "../../../Components/LightButton/LightButton";
import Input from "../../../Components/Input/Input";

export default function UserPanelSetting() {
    return (
        <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
            <div className='flex flex-col items-center md:items-start justify-center md:justify-start'>
                <h5 className='text-title font-IranSansFaNum-Bold text-xl mb-4'>
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
                <Input type='textarea' icon='comment' label='توضیحات' placeholder='توضیحات :'/>
            </div>
            <PrimaryButton title='ذخیره تغییرات'/>
        </div>
    )
}