export default function PaymentCard({ img, name, date, number, className, bodyStyle, footerStyle, children }) {
    return (
        <div className={`p-6 rounded-md shadow-sm shadow-sub-title/15 cursor-pointer ${className}`}>
            <div className='h-[60px]'>
                <img className='h-full object-cover' src={img} alt="master"/>
            </div>
            {
                children ? children : (
                    <>
                        <h5 className={`text-sub-title font-IranSansFaNum-Bold text-xl mt-6 ${bodyStyle}`}>
                            {number}
                        </h5>
                        <div className={`flex items-center justify-between mt-2 ${footerStyle}`}>
                        <span className='font-IranSansFaNum-Bold'>
                            {name}
                        </span>
                            <div className='flex gap-1'>
                                <span
                                    className={`font-IranSansFaNum-Bold ${!footerStyle && 'text-sub-title'}`}>انقضا:</span>
                                <span className='font-IranSansFaNum-Bold'>{date}</span>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}