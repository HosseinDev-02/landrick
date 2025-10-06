export default function SocialMediaBox({ icon, link, className }) {
    return (
        <a className={`flex items-center justify-center border w-8 h-8 rounded-md duration-500 transition-all ${className}`}
           href={`${link || '#'}`}>
            <svg className='w-4 h-4'>
                <use href={`#${icon}`}></use>
            </svg>
        </a>
    )
}