export default function StatisticsBox({ title, img, caption }) {
    return (
        <div className='flex flex-col items-center'>
                        <span className='inline-block w-15.5 h-15.5 mb-6'>
                            <img className='w-full h-full' src={`${img}`} alt="Happy Customers"/>
                        </span>
            <span className='text-4xl font-IranSansFaNum-Bold text-title mb-2 inline-block'>
                {title}
            </span>
            <span className='font-IranSansFaNum-Bold inline-block'>
                {caption}
            </span>
        </div>
    )
}