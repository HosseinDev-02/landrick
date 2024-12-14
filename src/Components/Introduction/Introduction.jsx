import LightButton from "../LightButton/LightButton";

export default function Introduction() {
    return (
        <section className='flex items-center justify-center introduction pt-28 md:pt-40 bg-primary'>
            <div className="container h-full">
                <div className='md:grid md:grid-cols-12 items-center gap-20'>
                    <div className='col-span-12 md:col-start-1 md:col-span-5 lg:col-span-7 pb-10'>
                        <span className='text-2xl font-IranSansFaNum-Bold text-white/50 inline-block mb-2'>
                            ما فوق خلاق هستیم!
                        </span>
                        <h1 className='text-4xl md:text-5xl leading-[67px] font-IranSansFaNum-Bold dark:font-Dana dark:tracking-[1px] text-white mb-4'>
                            بهترین عملیات اطلاعاتی را در
                            شرکت داریم
                        </h1>
                        <p className='text-lg text-white/50'>
                            کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت صفحه بوت استرپ v5 html تبدیل محور بهره مند شوید.
                        </p>
                        <LightButton
                            className={`mt-6`}
                            title='شروع کنید'
                        />
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <img className='w-full' src="/images/hero1.png" alt="Introduction Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}