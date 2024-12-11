export default function SectionHeader({ title, children, subTitle }) {
    return (
        <div className='text-center'>
            {
                subTitle && (
                    <span className='inline-block mb-2 text-primary font-IranSansFaNum-Bold'>{subTitle}</span>
                )
            }
            <h2 className='font-IranSansFaNum-Bold text-2xl md:text-3xl text-title mb-6'>
                {title}
            </h2>
            {
                children
            }
        </div>
    )
}