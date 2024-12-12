import StatisticsBox from "../StatisticsBox/StatisticsBox";

export default function Statistics() {
    return (
        <section className='py-28 bg-light'>
            <div className="container">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    <StatisticsBox
                        title='97%'
                        img='/images/statics/Asset190.svg'
                        caption='مشتریان خوشحال'
                    />
                    <StatisticsBox
                        title='+15'
                        img='/images/statics/Asset189.svg'
                        caption='جوایز'
                    />
                    <StatisticsBox
                        title='2هزار'
                        img='/images/statics/Asset192.svg'
                        caption='موقعیت شغلی'
                    />
                    <StatisticsBox
                        title='98%'
                        img='/images/statics/Asset187.svg'
                        caption='پروژه های تکمیلی'
                    />
                </div>
            </div>
        </section>
    )
}