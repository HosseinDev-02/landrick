export default function BlogBox({ title, img, author, date, comment, like, link }) {
    return (
        <div
            className='blog rounded-md overflow-hidden shadow-[0_0_3px_rgba(60,72,88,0.15)] transition-all duration-500 group'>
            <div className='relative'>
                <img className='w-full h-full object-cover' src={`${img}`} alt="blog 1"/>
                <div
                    className='absolute inset-0 p-4 bg-sub-title/40 invisible opacity-0 transition-opacity duration-500 group-hover:visible group-hover:opacity-100'>
                    <div className='mb-1 flex items-center gap-1'>
                        <svg className='w-4 h-4 text-light'>
                            <use href='#user'></use>
                        </svg>
                        <span className='text-sm text-light'>{author}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg className='w-4 h-4 text-light'>
                            <use href='#calendar-alt'></use>
                        </svg>
                        <span className='text-sm text-light'>{date}</span>
                    </div>
                </div>
            </div>
            <div className='p-6'>
                <h2 className='mb-4'>
                    <a className='text-xl font-IranSansFaNum-Bold text-title transition-all hover:text-primary duration-500'
                       href="#">
                        {title}
                    </a>
                </h2>
                <div className='flex items-center justify-between pr-8'>
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
                       href={`${link}`}>
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