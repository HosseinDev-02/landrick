export default function Input({type, icon, className, placeholder, label, require = false, color}) {

    return (
        <>
            <div className={`${label && 'flex flex-col gap-2'} ${type === 'checkbox' ? 'w-auto flex items-center justify-center' : 'w-full'}`}>
                {
                    label && (
                        <div className={`flex gap-1 items-center ${color ? color : 'text-title'} font-IranSansFaNum-Bold text-sm`}>
                            {label}
                            {
                                require && (
                                    <span className='text-error text-sm'>
                                        *
                                    </span>
                                )
                            }
                        </div>
                    )
                }
                {
                    type === 'text' || type === 'password' ? (
                            <div
                                className='flex items-center gap-2 relative h-10 w-full'>
                            <span className={`shrink-0 absolute right-4 ${color ? color : 'text-title'}`}>
                            <svg className='w-4 h-4'>
                            <use href={`#${icon}`}></use>
                </svg>
                </span>
                                <input
                                    className={`outline-none border border-light-border rounded-md dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 w-full text-sub-title h-full text-sm py-1.5 pl-1.5 ${icon && 'pr-12'} ${className}`}
                                    placeholder={placeholder}
                                    type={type}/>
                            </div>
                        ) : type === 'textarea' ?
                        (
                            <div className='relative flex'>
                                <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                    <use href={`#${icon}`}></use>
                                </svg>
                                <textarea
                                    className={`outline-none dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 h-36 w-full rounded-md border border-light-border py-1.5 pl-3 text-sm ${icon && 'pr-12'} ${className}`}
                                    placeholder={placeholder}></textarea>
                            </div>
                        ) : (
                            <input
                                   className='shrink-0 w-4 h-4 appearance-none border checked:bg-check border-black/25 dark:border-[#495057] cursor-pointer rounded'
                                   type="checkbox"/>
                        )
                }
            </div>
        </>
    )
}