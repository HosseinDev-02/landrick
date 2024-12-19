export default function PostBox({ title, date, img }) {
    return (
        <a href='#' className='flex items-center gap-2.5'>
            <div className='w-1/4 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={img}
                     alt={title}/>
            </div>
            <div className='flex flex-col items-start'>
                                                <span className='text-md text-sub-title'>
                                                    {title}
                                                </span>
                <span className='text-xs'>
                                                    {date}
                                                </span>
            </div>
        </a>
    )
}