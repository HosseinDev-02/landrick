export default function WorkBox({ title, icon, shape, caption, className }) {
    return (
        <div
            className={`flex items-center justify-center flex-col text-center ${shape && 'relative md:after:content-process md:after:absolute md:after:top-0 md:after:bottom-0 md:after:my-auto md:after:right-full md:after:h-10 lg:after:translate-y-5'} ${className}`}>
                        <span
                            className='w-15.5 h-15.5 flex items-center justify-center rounded-md bg-primary/10 text-primary'>
                            <svg className='w-7.5 h-7.5'>
                                <use href={`#${icon}`}></use>
                            </svg>
                        </span>
            <div className='p-6'>
                <h3 className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-sub-title mb-2'>
                    {title}
                </h3>
                <p>
                    {caption}
                </p>
            </div>
        </div>
    )
}