import {useEffect, useState} from "react";

export default function ProgressBar({ title, percent, fillBg }) {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setNumber(prevNum => prevNum + 1)
        }, 5)
        if(number === percent) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [number]);
    return (
        <div>
            <h6 className='text-light font-IranSansFaNum-Bold dark:font-IranSansDn-Bold mb-2'>{title}</h6>
            <div className='bg-light rounded w-full h-2.5 flex items-center p-[3px]'>
                <span
                    style={{width: `${number}%`}}
                    className={`bg-[#161C2D] h-full rounded relative ${fillBg && fillBg}`}>
                    <span className='absolute -left-3 bottom-2 font-IranSansFaNum-Bold dark:font-IranSansDn-Bold text-light'>
                        {percent}
                    </span>
                </span>
            </div>
        </div>
    )
}