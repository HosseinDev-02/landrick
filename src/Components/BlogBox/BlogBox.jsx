export default function BlogBox({ title, img, author, date, comment, like, link }) {
    return (
        <div
            className='blog rounded-md overflow-hidden shadow-sm shadow-sub-title/15 dark:shadow-white/15 transition-all duration-500 group bg-body'>
            <div className='relative'>
                <a href='/blog-detail/blog-01-info'>
                    <img className='w-full h-full object-cover' src={`${img}`} alt="blog 1"/>
                </a>
                <a href='/blog-detail/blog-01-info'
                    className='absolute inset-0 p-4 bg-sub-title/40 invisible block opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100'>
                    <div className='mb-1 flex items-center gap-1'>
                        <svg className='w-4 h-4 text-light-bg'>
                            <use href='#user'></use>
                        </svg>
                        <span className='text-sm text-light-bg'>{author}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg className='w-4 h-4 text-light-bg'>
                            <use href='#calendar-alt'></use>
                        </svg>
                        <span className='text-sm text-light-bg'>{date}</span>
                    </div>
                </a>
            </div>
            <div className='p-6'>
                <h3 className='mb-4'>
                    <a className='text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title transition-all hover:text-primary duration-500'
                       href="/blog-detail/blog-01-info">
                        {title}
                    </a>
                </h3>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <a href='' className='flex items-center gap-1 hover:text-error transition-colors duration-500'>
                            <svg className='w-4 h-4'>
                                <use href='#heart'></use>
                            </svg>
                            <span className='text-sm'>{like}</span>
                        </a>
                        <a href='#'
                           className='flex items-center gap-1 hover:text-success transition-colors duration-500'>
                            <svg className='w-4 h-4'>
                                <use href='#comment'></use>
                            </svg>
                            <span className='text-sm'>{comment}</span>
                        </a>
                    </div>
                    <a className='flex items-center gap-1 transition-all hover:text-primary duration-500 text-sm'
                       href='/blog-detail/blog-01-info'>
                        ادامه مطلب
                        <svg className='w-4 h-4'>
                            <use href='#angle-left'></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}