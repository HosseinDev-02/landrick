import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function UserTeamBox ({ img, name }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='rounded-full w-[110px] h-[110px] overflow-hidden shadow-lg shadow-sub-title/15'>
                <img className='w-full h-full object-cover' src={img} alt={name}/>
            </div>
            <h5 className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-sub-title text-xl mt-6'>
                {name}
            </h5>
            <div className='flex items-center gap-1 mt-2 mb-3'>
                <SocialMediaBox icon='instagram'
                                className='text-caption border-caption hover:bg-primary hover:text-white hover:border-primary'/>
                <SocialMediaBox icon='twitter'
                                className='text-caption border-caption hover:bg-primary hover:text-white hover:border-primary'/>
                <SocialMediaBox icon='linkedin'
                                className='text-caption border-caption hover:bg-primary hover:text-white hover:border-primary'/>
                <SocialMediaBox icon='github'
                                className='text-caption border-caption hover:bg-primary hover:text-white hover:border-primary'/>
            </div>
            <PrimaryButton className='flex-row-reverse' icon='envelope' title='ارسال پیام'/>
        </div>
    )
}