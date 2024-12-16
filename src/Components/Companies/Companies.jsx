import CompanyBox from "../CompanyBox/CompanyBox";

export default function Companies({ className }) {
    return (
        <section className={`pt-6 bg-light-bg ${className}`}>
            <div className="container">
                <div className='grid grid-cols-2 md:grid-cols-6'>
                    <CompanyBox
                        img='/images/compony/amazon.svg'
                    />
                    <CompanyBox
                        img='/images/compony/google.svg'
                    />
                    <CompanyBox
                        img='/images/compony/lenovo.svg'
                    />
                    <CompanyBox
                        img='/images/compony/paypal.svg'
                    />
                    <CompanyBox
                        img='/images/compony/shopify.svg'
                    />
                    <CompanyBox
                        img='/images/compony/spotify.svg'
                    />
                </div>
            </div>
        </section>
    )
}