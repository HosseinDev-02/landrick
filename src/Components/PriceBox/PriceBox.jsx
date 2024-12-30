import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function PriceBox({ title, price, items, theBest }) {
    return (
        <div className={`price-box p-1.5 overflow-hidden relative group transition-all duration-500 ${theBest && 'after:absolute after:bg-[#d55b0e] after:content-[""] after:left-[55px] after:top-2 after:w-10 after:h-10 after:rotate-45 before:absolute before:bg-[#d55b0e] before:content-[""] before:left-2 before:top-[55px] before:w-10 before:h-10 before:rotate-45'}`}>
            <div
                className='bg-light-bg relative z-10 rounded-md px-6 py-12 border-b-[3px] border-b-footer text-center shadow-sm shadow-sub-title/15 transition-all duration-500 group-hover:border-primary group-hover:bg-body group-hover:shadow-md group-hover:shadow-sub-title/20 dark:group-hover:shadow-[rgba(60,72,88,0.2)]'>
                                    <span className='text-primary font-IranSansFaNum-Bold inline-block mb-6'>
                                        {title}
                                    </span>
                <div
                    className='flex md:hidden lg:flex gap-1 items-end justify-center font-IranSansFaNum-Bold text-title text-2xl/9 mb-6'>
                    <div className='flex items-center'>
                                            <span className='leading-[56px] text-[42px]/[64px] font-IranSansFaNum'>
                                            {price}
                                        </span>
                        <span>هزار تومان</span>
                    </div>
                    <span>
                                            / ماهانه
                                        </span>
                </div>
                <div
                    className='hidden md:flex lg:hidden flex-col items-center justify-center font-IranSansFaNum-Bold text-title text-2xl mb-6'>
                                        <span className='leading-[56px]'>
                                            {price} هزار تومان
                                        </span>
                    <span>
                        ماهانه
                                        </span>
                </div>
                <ul className='flex items-center gap-1 flex-col'>
                    {
                        items.map(item => (
                            <li key={item.id} className='flex items-center gap-2'>
                                <svg className='w-5 h-5 text-primary'>
                                    <use href='#check-circle'></use>
                                </svg>
                                <span className='font-IranSansFaNum-Bold text-[#8492a6]'>
                                                {item.title}
                                            </span>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <PrimaryButton
                        className='mx-auto mt-6'
                        title='خرید اشتراک'
                    />
                </div>
            </div>
            {
                theBest && (
                    <span
                        className='bg-[#f17425] z-20 absolute -left-7.5 top-4 text-white font-IranSansFaNum-Bold px-9 -rotate-45'>بهترین</span>
                )
            }
        </div>
    )
}