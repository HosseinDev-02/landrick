export default function CommentBox({name, job, rate, img, caption}) {

    return (
        <div className='flex items-start gap-5'>
            {/* comment image */}
            <div
                className='w-15.5 h-15.5 rounded-md overflow-hidden shrink-0 shadow-sm shadow-sub-title/15'>
                <img className='w-full h-full object-cover' src={img}
                     alt="customer image"/>
            </div>
            {/* comment content */}
            <div
                className='p-4 rounded-md shadow-sm shadow-sub-title/15 relative bg-body before:absolute before:content-[""] before:w-4 before:h-4 before:shadow-[2px_-2px_2px_-1px_rgba(60,72,88,0.15)] before:-right-1.5 before:bg-body before:top-6 before:rotate-45'>
                <div className='flex items-center gap-2 py-2 pr-8'>
                    {
                        Array(rate).fill(0).map((star, index) => (
                            <svg key={index} className='w-4 h-4 fill-warning text-warning'>
                                <use href='#star'></use>
                            </svg>
                        ))

                    }
                    {
                        rate < 5 && (
                            Array(5 - rate).fill(0).map((star, index) => (
                                <svg key={index} className='w-4 h-4 fill-transparent text-sub-title/15'>
                                    <use href='#star'></use>
                                </svg>
                            ))
                        )
                    }

                </div>
                <p className='mt-2'>
                    {
                        caption
                    }
                </p>
                <div
                    className='flex items-center gap-1 text-sm font-IranSansFaNum-Bold dark:font-IranSansDn-Bold py-2 mt-2 relative before:absolute before:content-[""] before:w-1.5 before:h-0.5 before:right-0 before:bg-primary pr-3'>
                    <span className='text-primary text-base'>{name}</span>
                    {job}
                </div>
            </div>
        </div>
    )
}