export default function SideBarBox({ title, children, className }) {
    return (
        <div className={className}>
            <h2 className='text-xl font-IranSansFaNum-Bold text-title mb-6'>
                {title}
            </h2>
            {children}
        </div>
    )
}