import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";

export default function TeamBox({ name, img, job }) {
    return (
        <div className='group'>
            <div className='w-46 h-46 rounded-full overflow-hidden mx-auto relative'>
                <img
                    className='w-full h-full object-cover group-hover:opacity-20 transition-all duration-500'
                    src={`${img}`}
                    alt="rony jefra"/>
                <div
                    className='absolute top-0 bottom-0 w-full right-0 my-auto left-1 flex items-center justify-center gap-2 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 duration-500'>
                    <SocialMediaBox
                        icon='facebook'
                        link='#'
                        className='border-sub-title dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white text-sub-title hover:text-white hover:border-primary hover:bg-primary'
                    />
                    <SocialMediaBox
                        icon='instagram'
                        link='#'
                        className='border-sub-title dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white text-sub-title hover:text-white hover:border-primary hover:bg-primary'
                    />
                    <SocialMediaBox
                        icon='twitter'
                        link='#'
                        className='border-sub-title dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white text-sub-title hover:text-white hover:border-primary hover:bg-primary'
                    />
                    <SocialMediaBox
                        icon='linkedin'
                        link='#'
                        className='border-sub-title dark:border-footer dark:text-footer dark:hover:border-primary dark:hover:text-white text-sub-title hover:text-white hover:border-primary hover:bg-primary'
                    />
                </div>
            </div>
            <div className='mt-4 text-center'>
                <h3>
                    <a className='text-sub-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl hover:text-primary transition-colors duration-200'
                       href="#">{name}</a>
                </h3>
                <span className='text-sm'>
                        {job}
                </span>
            </div>
        </div>
    )
}