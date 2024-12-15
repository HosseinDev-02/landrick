import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function OurExperience() {
    return (
        <section className='pt-14'>
            <div className="container">
                <div className='grid grid-cols-12 gap-6 lg:gap-12 items-center'>
                    <div className='col-span-12 md:col-span-6'>
                        <img className='w-full h-full object-cover' src="/images/aboutus/about2.png" alt="Our Experience"/>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <div className='flex items-center gap-2 mb-6'>
                            <div className='text-primary font-IranSansFaNum-Bold text-[56px]/[64px] md:text-[80px]/[96px] flex items-end'>15 <span className='text-[42px]/[64px]'>+</span></div>
                            <span className='text-title md:mt-12 font-IranSansFaNum-Bold'>سال <br/> تجربه</span>
                        </div>
                        <h2 className='text-title text-2xl md:text-3xl font-IranSansFaNum-Bold mb-6'>
                            ما کی هستیم ؟
                        </h2>
                        <p className='mb-8'>
                            شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'> لنـدریـک</span> که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند. متن ساختگی متنی است که در صنعت نشر یا طراحان وب برای اشغال فضایی استفاده می شود که بعداً با محتوای واقعی پر خواهد شد. این مورد زمانی الزامی است که مثلاً متن نهایی هنوز در دسترس نیست. متون ساختگی از قرن شانزدهم مورد استفاده حروفچینی ها قرار گرفته اند.
                        </p>
                        <PrimaryButton
                            title='تماس با ما'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}