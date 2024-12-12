export default function LightButton({ className, title }) {
    return (
        <a className={`bg-body rounded px-5 py-2 text-sub-title font-IranSansFaNum-Bold inline-flex items-center gap-1 border border-body duration-300 hover:bg-[#d4daed] transition-all hover:border-[#d4daed] shadow-btn shadow-[#f8f9fc4d] ${className}`}
           href="#">
            {
                title
            }
        </a>
    )
}