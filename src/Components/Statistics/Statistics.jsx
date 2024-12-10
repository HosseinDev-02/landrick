export default function Statistics() {
    return (
        <section className='py-28 bg-light'>
            <div className="container">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    <div className='flex flex-col items-center'>
                        <span className='inline-block w-15.5 h-15.5 mb-6'>
                            <img className='w-full h-full' src="/images/statics/Asset190.svg" alt="Happy Customers"/>
                        </span>
                        <span className='text-4xl font-IranSansFaNum-Bold text-title mb-2 inline-block'>97%</span>
                        <span className='font-IranSansFaNum-Bold inline-block'>مشتریان خوشحال</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='inline-block w-15.5 h-15.5 mb-6'>
                            <img className='w-full h-full' src="/images/statics/Asset189.svg" alt="Happy Customers"/>
                        </span>
                        <span className='text-4xl font-IranSansFaNum-Bold text-title mb-2 inline-block'>+15</span>
                        <span className='font-IranSansFaNum-Bold inline-block'>جوایز</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='inline-block w-15.5 h-15.5 mb-6'>
                            <img className='w-full h-full' src="/images/statics/Asset192.svg" alt="Happy Customers"/>
                        </span>
                        <span className='text-4xl font-IranSansFaNum-Bold text-title mb-2 inline-block'>2هزار</span>
                        <span className='font-IranSansFaNum-Bold inline-block'>موقعیت شغلی</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='inline-block w-15.5 h-15.5 mb-6'>
                            <img className='w-full h-full' src="/images/statics/Asset187.svg" alt="Happy Customers"/>
                        </span>
                        <span className='text-4xl font-IranSansFaNum-Bold text-title mb-2 inline-block'>98%</span>
                        <span className='font-IranSansFaNum-Bold inline-block'>پروژه های تکمیلی</span>
                    </div>
                </div>
            </div>
        </section>
    )
}