export default function AboutusIntro() {
    return (
        <section className='aboutus-intro relative z-20'>
            <div className="container">
                <div className='flex flex-col text-center items-center gap-2'>
                    <h1 className='text-5xl/[64px] font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-white'>
                        درباره ما
                    </h1>
                    <p className='text-white/50 text-lg max-w-[600px] w-full'>
                        کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </div>
            </div>
            <div className='absolute inset-0 bg-sub-title/70 dark:bg-body/70 -z-10'></div>
        </section>
    )
}