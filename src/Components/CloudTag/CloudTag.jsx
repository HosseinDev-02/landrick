export default function CloudTag({title}) {
    return (
        <a className='rounded-md text-[9px]/[14px] inline-flex py-2 px-3 bg-[#e9ecef] dark:bg-light-bg text-sub-title dark:text-footer dark:hover:text-white dark:hover:bg-primary duration-500 font-IranSansFaNum-Bold transition-colors hover:text-white hover:bg-primary'
           href="#">
            {
                title
            }
        </a>
    )
}