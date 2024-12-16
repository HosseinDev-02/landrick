export default function CompanyBox({img}) {
    return (
        <span className='flex items-center justify-center pt-6 px-3'>
                        <img src={`${img}`} className='h-6 object-cover' alt="Amazon"/>
                    </span>
    )
}