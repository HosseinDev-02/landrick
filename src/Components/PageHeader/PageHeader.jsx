export default function PageHeader({ title, caption, img, bgColor, className, titleStyle }) {
    return (
    <section style={{backgroundImage: img ? `url(${img})` : '', backgroundColor: bgColor ? `${bgColor}` : ''}} className={`page-header-image relative z-20 ${className}`}>
        <div className="container">
            <div className='flex flex-col text-center items-center gap-2'>
                {
                    caption ? (
                        <h1 className={`text-5xl/[64px] font-IranSansFaNum-Bold dark:font-IranSansDn-Bold ${titleStyle}`}>
                            {title}
                        </h1>
                    ) : (
                        <h1 className={`text-2xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold ${titleStyle}`}>
                            {title}
                        </h1>
                    )
                }
                {
                    caption && (
                        <p className='text-white/50 text-lg max-w-[600px] w-full'>
                            {caption}
                        </p>
                    )
                }
            </div>
        </div>
        {
            img && (
                <div className='absolute inset-0 bg-sub-title/70 dark:bg-body/70 -z-10'></div>
            )
        }
    </section>
    )
}