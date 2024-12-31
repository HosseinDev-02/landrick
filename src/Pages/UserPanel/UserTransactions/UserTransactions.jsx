import PaymentCard from "../../../Components/PaymentCard/PaymentCard";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

export default function UserTransactions() {
    return (
        <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
            <div className='flex items-center justify-between mb-8'>
                <h5 className='text-title text-xl font-IranSansFaNum-Bold dark:font-IranSansDn-Bold'>
                    روش های پرداخت :
                </h5>
                <PrimaryButton className='flex-row-reverse' icon='plus' title='افزودن'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6'>
                <PaymentCard
                    img='/images/payments/cards/master.png'
                    name='کریستینو مورفی'
                    number='•••• •••• •••• 4559'
                    date='10/22'
                    className='bg-light-bg'
                />
                <PaymentCard
                    img='/images/payments/cards/visaa.png'
                    name='کریستینو مورفی'
                    number='•••• •••• •••• 9856'
                    date='10/22'
                    className='bg-sub-title'
                    bodyStyle='text-white dark:text-[#161c2d]'
                    footerStyle='text-caption'
                />
                <PaymentCard
                    img='/images/payments/cards/rupay.png'
                    name='کریستینو مورفی'
                    number='•••• •••• •••• 5465'
                    date='10/22'
                    className='bg-[#17a2b8]'
                    bodyStyle='text-white dark:text-[#161c2d]'
                    footerStyle='text-white dark:text-[#161c2d]'
                />
                <PaymentCard
                    img='/images/payments/cards/paypals.png'
                    className='bg-light-bg flex flex-col justify-between'
                >
                    <div className='mt-6 flex'>
                        <input className='w-full text-sm px-3 h-full bg-body transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-[#495057] outline-none border border-light-border rounded-r-md' placeholder='ایمیل پی پال:' type="text"/>
                        <PrimaryButton title='ارسال'/>
                    </div>
                </PaymentCard>
            </div>
        </div>
    )
}