import UserAuth from "../../Components/UserAuth/UserAuth";
import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

export default function Register() {
    return(
        <UserAuth bg='bg-register' title='ثبت نام'>
            <div>
                <form className='flex flex-col gap-4' action="#">
                    <div className='flex items-center gap-4'>
                        <Input type='text' icon='user' label='نام' require={true}
                               placeholder='نام :'/>
                        <Input type='text' icon='user-check' label='نام خانوادگی' require={true}
                               placeholder='نام خانوادگی :'/>
                    </div>
                    <Input type='text' icon='user' label='ایمیل شما' require={true}
                           placeholder='ایمیل :'/>
                    <Input type='password' icon='key' label='رمز عبور' require={true}
                           placeholder='رمز عبور :'/>

                    <div className='flex items-center gap-2'>
                        <Input type='checkbox'/>
                        <div className='flex items-center gap-0.5 font-IranSansFaNum-Bold text-title text-sm flex-wrap'>
                            تایید می کنم
                            <span className='text-primary'>
                                    قوانین سایت لنـدریـک را و تیکت را فعال میکنم
                                </span>
                        </div>
                    </div>
                    <PrimaryButton className='!flex items-center justify-center' title='ورود'/>
                </form>
                <div className='flex flex-col items-center gap-5 mt-5'>
                        <span className='text-title font-IranSansFaNum-Bold'>
                            یا با آن ثبت نام کنید
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
                                    حسابی دارید؟
                                </span>
                        <a className='text-title hover:text-primary text-md font-IranSansFaNum-Bold transition-colors duration-500'
                           href="/login">
                            وارد شوید
                        </a>
                    </div>
                </div>
            </div>
        </UserAuth>
    )
}