export default function Comment({answer, userImg, userName, commentDate, commentText, adminImg, adminName, answerDate, answerText}) {
    return (<div className='space-y-6'>
            <div>
                <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-4'>
                        <div
                            className='w-[45px] h-[45px] rounded-full overflow-hidden shrink-0'>
                            <img className='w-full h-full object-cover'
                                 src={userImg} alt={userName}/>
                        </div>
                        <div className='flex flex-col items-start'>
                                                            <span className='text-title font-IranSansFaNum-Bold'>
                                                                {userName}
                                                            </span>
                            <span className='text-sm'>
                                                                {commentDate}
                                                            </span>
                        </div>
                    </div>
                    <button className='flex items-center gap-1'>
                        <svg className='w-4 h-4'>
                            <use href='#reply'></use>
                        </svg>
                        <span className=''>پاسخ</span>
                    </button>
                </div>
                <div className='rounded-md p-4 bg-light-bg mt-4'>
                    <p className=''>
                        {commentText}
                    </p>
                </div>
            </div>
            {answer && (<div className='relative pr-6 md:pr-12 border-r-2 border-r-light-border border-dashed'>
                    <div className='flex items-start justify-between'>
                        <div className='flex items-center gap-4'>
                            <div
                                className='w-[45px] h-[45px] rounded-full overflow-hidden shrink-0'>
                                <img className='w-full h-full object-cover'
                                     src={adminImg} alt={adminName}/>
                            </div>
                            <div className='flex flex-col items-start'>
                                                            <span className='text-title font-IranSansFaNum-Bold'>
                                                                {adminName}
                                                            </span>
                                <span className='text-sm'>
                                                                {answerDate}
                                                            </span>
                            </div>
                        </div>
                        <button className='flex items-center gap-1'>
                            <svg className='w-4 h-4'>
                                <use href='#reply'></use>
                            </svg>
                            <span className=''>پاسخ</span>
                        </button>
                    </div>
                    <div className='rounded-md p-4 bg-light-bg mt-4'>
                        <p className=''>
                            {answerText}
                        </p>
                    </div>
                </div>)}

        </div>)
}