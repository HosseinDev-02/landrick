import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import UserAuth from "../../Components/UserAuth/UserAuth";

export default function Login() {
    return (
        <UserAuth title='وارد شوید' bg='bg-login'>
            <div>
                <form className='flex flex-col gap-4' action="#">
                    <Input type='text' icon='user' label='ایمیل شما' require={true}
                           placeholder='ایمیل :'/>
                    <Input type='password' icon='key' label='رمز عبور' require={true}
                           placeholder='رمز عبور :'/>
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
                        <a className='text-title hover:text-primary text-md font-IranSansFaNum-Bold transition-colors duration-500'
                           href="/register">
                            ثبت نام کنید
                        </a>
                    </div>
                </div>
            </div>
        </UserAuth>
    )
}