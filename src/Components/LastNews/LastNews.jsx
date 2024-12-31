import BlogBox from "../BlogBox/BlogBox";

export default function LastNews() {
    return(
        <section className='py-[100px] mt-[100px] bg-light-bg'>
            <div className="container">
            {/*  Section Header  */}
                <div className='flex flex-col lg:flex-row gap-y-6 items-center justify-between'>
                    <div>
                        <span className='text-primary font-IranSansFaNum-Bold dark:font-IranSansDn-Bold block mb-2 text-center lg:text-right'>وبلاگ</span>
                        <h2 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-2xl md:text-3xl text-title leading-[45px] text-center lg:text-right'>
                            آخرین اخبار سایت
                            <br/>
                            و بروز رسانی ها را دنبال کنید
                        </h2>
                    </div>
                    <p className='text-center lg:text-right max-w-[560px] lg:max-w-[511px] w-full'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </div>
                {/*  Section Content  */}
                <div className='mt-8 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
                    <BlogBox
                        title='برنامه های خود را به روش خود طراحی کنید'
                        img='/images/blogs/01.jpg'
                        author='کالوین لورس'
                        date='مهر 1403'
                        comment='8'
                        like='14'
                    />
                    <BlogBox
                        title='برنامه ها چگونه دنیای اطلاعات را تغییر می دهند'
                        img='/images/blogs/02.jpg'
                        author='کالوین لورس'
                        date='اردیبهشت 1403'
                        comment='28'
                        like='50'
                    />
                    <BlogBox
                        title='هوشمندترین برنامه ها برای تجارت و کار'
                        img='/images/blogs/03.jpg'
                        author='کالوین لورس'
                        date='مهر 1403'
                        comment='16'
                        like='33'
                    />
                </div>
            </div>
        </section>
    )
}