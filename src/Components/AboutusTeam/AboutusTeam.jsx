export default function AboutusTeam() {
    return (
        <section className='pb-[60px] md:pb-[100px] bg-light-bg relative'>
            <div className="container">
                <div className='relative z-10'>
                    <div className='relative shadow-lg shadow-sub-title/15 rounded-md overflow-hidden'>
                        <a href='#'
                           className='group flex items-center justify-center w-[75px] h-[75px] rounded-full bg-body shadow shadow-sub-title/15 text-primary absolute inset-0 m-auto'>
                            <svg className='w-6 h-6 fill-transparent group-hover:fill-primary transition-all'>
                                <use href='#play'></use>
                            </svg>
                        </a>
                        <img className='w-full h-full object-cover' src="/images/aboutus/video-cover.jpg" alt="Team Video Cover"/>
                    </div>
                    <div className='grid grid-cols-12 gap-y-6 items-center pt-6 md:pt-12 md:mt-12'>
                        <div className='col-span-12 text-center md:text-right md:col-start-2 md:col-end-5 xl:col-end-4'>
                        <span className='font-IranSansFaNum-Bold inline-block mb-2 text-white/50'>
                            تیم
                        </span>
                            <h2 className='font-IranSansFaNum-Bold text-white text-2xl md:text-3xl'>
                                دیدار با تجربه
                                <br/>
                                و اعضا تیم
                            </h2>
                        </div>
                        <div className='col-span-12 text-center md:text-right md:col-start-7 md:col-end-12'>
                            <p className='text-white/50 mb-4'>

                                و اعضا تیم
                                کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد
                                ترافیک ، اتصال به آن نیاز دارید فراهم کند.
                            </p>
                            <a className='text-white inline-flex items-center justify-end gap-1'
                               href="#">
                                ادامه مطلب
                                <svg className='w-5 h-5'>
                                    <use href='#angle-left'></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='bg-primary bg-gradient-to-b from-white/15 to-white/0 absolute left-0 right-0 h-[80%] sm:h-2/3 bottom-0'></div>
            </div>
        </section>
    )
}