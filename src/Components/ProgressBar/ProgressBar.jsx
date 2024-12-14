export default function ProgressBar({ title, percent }) {
    return (
        <div>
            <h6 className='text-light font-IranSansFaNum-Bold dark:font-IranSansDn-Bold mb-2'>{title}</h6>
            <div className='bg-light rounded w-full h-2.5 flex items-center p-[3px]'>
                <span
                    style={{width: percent}}
                    className='bg-[#161C2D] h-full rounded relative'>
                    <span className='absolute -left-3 bottom-2 font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-light'>
                        {percent}
                    </span>
                </span>
            </div>
        </div>
    )
}