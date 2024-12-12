import SectionHeader from "../SectionHeader/SectionHeader";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ServiceBox from "../ServiceBox/ServiceBox";

export default function Services() {
    return (
        <section className='pt-[100px]'>
            <div className="container">
                <SectionHeader title='چه کاری انجام می دهیم؟'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-16'>
                    <ServiceBox
                        title='عملکرد بالا'
                        icon='chart-line'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='بهترین اوراق بهادار'
                        icon='crosshairs'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='سرویس مورد اعتماد'
                        icon='airplay'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='فناوری اطلاعات'
                        icon='rocket'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='24/7 پشتیبانی'
                        icon='clock'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='مدیریت اطلاعات'
                        icon='users-alt'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='شرکت مجاز'
                        icon='file-alt'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                    <ServiceBox
                        title='تجزیه و تحلیل داده'
                        icon='search'
                        caption='این یک واقعیت ثابت شده طولانی است که یک خواننده.'
                    />
                </div>
                <div className='text-center mt-8'>
                    <PrimaryButton
                        title='نمایش بیشتر'
                        icon='arrow-left-mini'
                    />
                </div>
            </div>
        </section>
    )
}