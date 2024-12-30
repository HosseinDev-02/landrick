export default function IconButton({ icon, link, onClick, className, animation }) {
    return (
        <a onClick={onClick} className={`h-9 w-9 rounded-md bg-primary text-white flex items-center justify-center fixed group shadow shadow-primary/30 ${className}`}
           href={`${link || '#'}`}>
            <svg className={`w-4 h-4 transition-all duration-500 ${animation && 'group-hover:-rotate-45'}`}>
                <use href={`#${icon}`}></use>
            </svg>
        </a>
    )
}