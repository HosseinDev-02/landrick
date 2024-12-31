import UserTeamBox from "../../../Components/UserTeamBox/UserTeamBox";

export default function Members() {
    return (
        <div className='shadow-sm shadow-sub-title/15 p-6 rounded-md'>
            <h5 className='text-title font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-xl mb-8'>
                اعضا :
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8'>
                <UserTeamBox img='/images/team/04.jpg' name='کارلوس پویول'/>
                <UserTeamBox img='/images/team/05.jpg' name='لوییس سوارز'/>
                <UserTeamBox img='/images/team/06.jpg' name='ایوان راکتیچ'/>
                <UserTeamBox img='/images/team/07.jpg' name='ژاوی آلونسو'/>
                <UserTeamBox img='/images/team/08.jpg' name='داوید آلابا'/>
                <UserTeamBox img='/images/team/04.jpg' name='لواندوفسکی'/>
                <UserTeamBox img='/images/team/05.jpg' name='فرانکی دی یانگ'/>
                <UserTeamBox img='/images/team/06.jpg' name='پابلو گاوی'/>
            </div>
        </div>
    )
}