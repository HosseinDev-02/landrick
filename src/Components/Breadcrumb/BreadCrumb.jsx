export default function BreadCrumb({page, items}) {
    return (<section className='-translate-y-1/2 relative z-30'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <div
                        className='h-11 px-6 bg-body rounded-md inline-flex items-center gap-2 shadow-sm shadow-sub-title/15'>
                        {items.map(item => (<>
                                {
                                    item.title === page ? (
                                    <span
                                        className='flex items-center gap-1 text-sm font-IranSansFaNum-Bold text-primary'>
                                        {
                                            item.title
                                        }
                                    </span>
                                ) : (
                            <a key={item.id}
                                       className='flex items-center gap-2 text-sm font-IranSansFaNum-Bold text-title hover:text-primary transition-colors duration-500'
                                       href="#">
                                        {item.title}
                                        <svg className='w-4 h-4'>
                                            <use href='#angle-left'></use>
                                        </svg>
                                    </a>
                                )}

                            </>))}
                    </div>
                </div>
            </div>
        </section>)
}