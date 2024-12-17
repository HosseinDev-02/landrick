import ServiceBox from "../ServiceBox/ServiceBox";

export default function OurServices() {
    return (
        <section className='mt-[60px] md:mt-14'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 pt-12'>
                    <ServiceBox
                        animation={true}
                        icon='edit-alt'
                        title='طراحی و توسعه'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
                    />
                    <ServiceBox
                        animation={true}
                        icon='vector-square'
                        title='مدیریت و بازاریابی'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..'
                    />
                    <ServiceBox
                        animation={true}
                        icon='file-search-alt'
                        title='استراتژی و تحقیقات'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..'
                    />
                    <ServiceBox
                        animation={true}
                        icon='airplay'
                        title='استفاده آسان'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..'
                    />
                    <ServiceBox
                        animation={true}
                        icon='calendar-alt'
                        title='گزارش های روزانه'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..'
                    />
                    <ServiceBox
                        animation={true}
                        icon='clock'
                        title='منطقه زمان واقعی'
                        caption='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..'
                    />
                </div>
            </div>
        </section>
    )
}