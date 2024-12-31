import Input from "../Input/Input";

export default function UserPanelSettingItem({ caption }) {
    return (
        <li className='py-6 flex items-center justify-between w-full gap-4'>
                        <span className='font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-title'>
                            {caption}
                        </span>
            <Input type='checkbox'/>
        </li>
    )
}