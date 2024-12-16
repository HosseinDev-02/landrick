export default function ProjectBox({ title, subtitle, img }) {
    return (
        <div className='relative rounded-md overflow-hidden group shadow-sm shadow-sub-title/15'>
            <div className='w-full h-full'>
                <img
                    className='w-full h-full object-cover group-hover:scale-[1.1] group-hover:-rotate-3 transition-all duration-500'
                    src={img} alt={title}/>
            </div>
            {/* content overlay */}
            <div className='bg-sub-title/65 absolute inset-0 w-full h-full invisible opacity-0 group-hover:visible group-hover:opacity-100 traall
                        duration-500'></div>
            {/*  content date and author infos  */}
            <div className='absolute left-6 top-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 traall
                        duration-500'>
                <div className='flex items-center gap-1 text-light-bg text-sm'>
                    <svg className='w-4 h-4'>
                        <use href='#user'></use>
                    </svg>
                    <span>کارلوس پویول</span>
                </div>
                <div className='flex items-center gap-1 text-light-bg text-sm mt-1'>
                    <svg className='w-4 h-4'>
                        <use href='#calendar-alt'></use>
                    </svg>
                    <span>اردیبهشت 1403</span>
                </div>
            </div>
            {/*  content infos  */}
            <div className='absolute right-6 bottom-5 flex flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 traall
                        duration-500'>
                <a className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-lg text-white dark:text-[#161c2d] transition-colors duration-500 hover:text-primary' href='#'>
                    {title}
                </a>
                <span className='text-light-bg inline-block text-sm'>
                    {subtitle}
                </span>
            </div>
        </div>
    )
}