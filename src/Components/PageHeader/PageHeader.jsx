export default function PageHeader({ title }) {
    return (
        <section className='services-intro relative z-20'>
            <div className="container">
                <div className='flex flex-col text-center items-center gap-2'>
                    <h2 className='text-2xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                        {
                            title
                        }
                    </h2>
                </div>
            </div>
        </section>
    )
}