export default function PrimaryButton({ className, title, icon }) {
    return (
        <a className={`bg-primary rounded-md border border-primary py-2 px-5 font-IranSansFaNum-Bold text-white shadow-btn duration-300 transition-colors hover:bg-primary-darker hover:border-primary-darker inline-flex items-center gap-1 ${className}`}
           href="#">
            {
                title
            }
            {
                icon && (
                    <svg className='w-4 h-4 align-middle inline'>
                        <use href={`#${icon}`}></use>
                    </svg>
                )
            }
        </a>
    )
}