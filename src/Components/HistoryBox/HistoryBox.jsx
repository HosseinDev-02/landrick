export default function HistoryBox({ direction, img, title, caption, year }) {
    return (
        <>
            {
                direction === 'left' ? (
                    <div className='flex flex-col md:flex-row relative gap-y-6 gap-x-12'>
                        <div className='md:w-1/2 flex items-start justify-start md:justify-end'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:right-auto md:after:-left-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    {year}
                                </span>
                        </div>
                        <div
                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                            <div>
                                <img className='w-full h-full object-cover' src={img}
                                     alt={title}/>
                            </div>
                            <div className='p-6'>
                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                    {title}
                                </h3>
                                <p className='mt-4 line-clamp-4'>
                                    {caption}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col md:flex-row-reverse relative gap-y-6 gap-x-12'>
                        <div className='md:w-1/2 flex items-start justify-start'>
                                <span
                                    className='text-title shadow-sm shadow-sub-title/15 rounded-md py-2 px-6 bg-body inline-block border border-[#e9ecef] dark:border-[#495057] relative after:absolute after:content-[""] after:top-0 after:bottom-0 after:my-auto after:-right-[26px] md:after:-right-[31px] after:bg-primary after:w-3 after:h-3 after:rounded after:rotate-45'>
                                    {year}
                                </span>
                        </div>
                        <div
                            className='md:w-1/2 bg-body shadow-sm rounded-md overflow-hidden shadow-sub-title/15'>
                            <div>
                                <img className='w-full h-full object-cover' src={img}
                                     alt={title}/>
                            </div>
                            <div className='p-6'>
                                <h3 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl text-title'>
                                    {title}
                                </h3>
                                <p className='mt-4 line-clamp-4'>
                                    {caption}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}