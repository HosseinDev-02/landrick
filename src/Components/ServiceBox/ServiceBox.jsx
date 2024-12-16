export default function ServiceBox({title, caption, icon, animation}) {
    return (
        <>
            {
                animation ? (
                <div className='group'>
                <div className='relative w-16 h-16 flex items-center justify-start'>
                    <svg className='w-[42px] h-[42px] text-primary'>
                        <use href={`#${icon}`}></use>
                    </svg>
                    <span
                        className='flex justify-start items-center text-primary rounded-md bg-gradient-to-tr transition-colors duration-500 from-transparent group-hover:bg-primary/10 to-primary/10 w-16 h-16 absolute right-2 rotate-[-36deg] top-0 group-hover:animate-spinMd'></span>
                </div>
                <h3 className='mt-6 text-xl text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                    {title}
                </h3>
                <p className='mt-2'>
                    {caption}
                </p>
            </div>
                ) : (
                <div
                className='relative rounded flex flex-col items-center justify-center bg-light-bg p-7 text-center z-10 hover:bg-primary group transition-colors duration-200 child:transition-all'>
                        <span className='text-primary inline-block mb-5 group-hover:text-white/50'>
                            <svg className='w-10.5 h-10.5'>
                                <use href={`#${icon}`}></use>
                            </svg>
                        </span>
                    <h3 className='text-xl font-IranSansFaNum-Bold text-title mb-2 group-hover:text-white'>
                        {title}
                    </h3>
                    <p className='group-hover:text-white/50 leading-[26px]'>
                        {caption}
                    </p>
                    <span
                        className='absolute inset-0 w-full h-full -z-10 opacity-[0.015] text-title group-hover:text-white group-hover:opacity-[0.05]'>
                            <svg className='w-full h-full'>
                                <use href={`#${icon}`}></use>
                            </svg>
                        </span>
                </div>
                )
            }
        </>
    )
}