import SectionHeader from "../SectionHeader/SectionHeader";
import TeamBox from "../TeamBox/TeamBox";

export default function OurMind() {
    return (
        <section className='mt-[100px]'>
            <div className="container">
                <SectionHeader title='قدرت ذهن ما'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 pt-8'>
                    <TeamBox
                        name='رونی جفرا'
                        img='/images/team/01%20(1).jpg'
                        job='سئو'
                    />
                    <TeamBox
                        name='میاکل'
                        img='/images/team/04.jpg'
                        job='کارگردان'
                    />
                    <TeamBox
                        name='موسی ماری'
                        img='/images/team/02%20(1).jpg'
                        job='مدیریت'
                    />
                    <TeamBox
                        name='لوسی'
                        img='/images/team/03%20(1).jpg'
                        job='توسعه دهنده'
                    />
                </div>
            </div>
        </section>
    )
}