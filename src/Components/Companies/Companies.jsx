export default function Companies({ className }) {
    return (
        <section className={`py-6 bg-light-bg ${className}`}>
            <div className="container">
                <div className='grid grid-cols-2 md:grid-cols-6'>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/amazon.svg"  className='h-6 object-cover' alt="Amazon"/>
                    </span>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/google.svg"  className='h-6 object-cover' alt="Google"/>
                    </span>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/lenovo.svg"  className='h-6 object-cover' alt="Lenovo"/>
                    </span>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/paypal.svg"  className='h-6 object-cover' alt="Paypal"/>
                    </span>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/shopify.svg" className='h-6 object-cover' alt="Shopify"/>
                    </span>
                    <span className='flex items-center justify-center py-6 px-3'>
                        <img src="/images/compony/spotify.svg" className='h-6 object-cover' alt="Spotify"/>
                    </span>
                </div>
            </div>
        </section>
    )
}