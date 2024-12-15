import SectionHeader from "../SectionHeader/SectionHeader";
import WorkBox from "../WorkBox/WorkBox";

export default function WorkProcess({ className }) {
    return (
        <section className={`mt-[100px] ${className}`}>
            <div className="container">
                <SectionHeader subTitle='فرآیند کار' title='چگونه کار می کنیم؟'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-14 md:gap-20 mt-16'>
                    <WorkBox
                        title='بحث'
                        icon='presentation-edit'
                        shape={true}
                        caption='مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد'
                        className='mt-6 pt-2'
                    />
                    <WorkBox
                        title='استراتژی و آزمایش'
                        icon='airplay'
                        shape={true}
                        caption='مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد'
                        className='mt-12 pt-4'
                    />
                    <WorkBox
                        title='گزارش نویسی'
                        icon='image-check'
                        shape={false}
                        caption='مشهورترین متن ساختگی "لورم اپیسوم" است که گفته می شود ریشه دارد'
                        className='mt-12 pt-12'
                    />
                </div>
            </div>
        </section>
    )
}