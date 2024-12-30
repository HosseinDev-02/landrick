export default function LightButton({ className, title, link, icon, onClickHandler }) {
    return (
        <a onClick={onClickHandler} className={`bg-light-bg rounded-md px-5 py-2 text-sub-title font-IranSansFaNum-Bold inline-flex items-center gap-1 border border-light-border dark:border-[#494f54] duration-300 hover:bg-[#d4daed] dark:hover:bg-[#364f6b] transition-all shadow shadow-light/30 dark:shadow-[#2536494d] ${className}`}
           href={`${link ? link : '#'}`}>
            {
                title
            }
            {
                icon && (
                    <svg className='w-6 h-6'>
                        <use href={`#${icon}`}></use>
                    </svg>
                )
            }
        </a>
    )
}