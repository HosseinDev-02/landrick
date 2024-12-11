import SectionHeader from "../SectionHeader/SectionHeader";

export default function WorkProcess() {
    return (
        <section className='mt-[100px]'>
            <div className="container">
                <SectionHeader subTitle='فرآیند کار' title='چگونه کار می کنیم؟'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-14 md:gap-20 mt-16'>
                    <div className='flex items-center justify-center flex-col text-center md:mt-8 relative md:after:content-process md:after:absolute md:after:top-0 md:after:bottom-0 md:after:my-auto md:after:right-full md:after:h-10 lg:after:translate-y-5'>
                        <span
                            className='w-15.5 h-15.5 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-6'>
                            <svg className='w-7.5 h-7.5'>
                                <use href='#presentation-edit'></use>
                            </svg>
                        </span>
                        <h3 className='text-xl font-IranSansFaNum-Bold text-title mb-2'>
                            بحث
                        </h3>
                        <p>
                            مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد
                        </p>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center md:mt-16 relative md:after:content-process md:after:absolute md:after:top-0 md:after:bottom-0 md:after:my-auto md:after:right-full md:after:h-10 lg:after:translate-y-5'>
                        <span
                            className='w-15.5 h-15.5 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-6'>
                            <svg className='w-7.5 h-7.5'>
                                <use href='#airplay'></use>
                            </svg>
                        </span>
                        <h3 className='text-xl font-IranSansFaNum-Bold text-title mb-2'>
                            استراتژی و آزمایش
                        </h3>
                        <p>
                            مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد
                        </p>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center md:mt-24'>
                        <span
                            className='w-15.5 h-15.5 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-6'>
                            <svg className='w-7.5 h-7.5'>
                                <use href='#image-check'></use>
                            </svg>
                        </span>
                        <h3 className='text-xl font-IranSansFaNum-Bold text-title mb-2'>
                            گزارش نویسی
                        </h3>
                        <p>
                            مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}