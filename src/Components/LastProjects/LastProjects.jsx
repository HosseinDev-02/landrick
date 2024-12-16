import SectionHeader from "../SectionHeader/SectionHeader";
import ProjectBox from "../ProjectBox/ProjectBox";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function LastProjects() {
    return (
        <section className='py-[60px] md:py-[100px] bg-light-bg'>
            <div className="container">
                <SectionHeader title='آخرین پروژه های ما'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-8 mt-8 mb-[60px] md:mb-[100px]'>
                    <ProjectBox
                        title='مجله رنگها'
                        subtitle='طراحی وب'
                        img='/images/work/1.jpg'
                    />
                    <ProjectBox
                        title='قهوه رایزر'
                        subtitle='برندینگ'
                        img='/images/work/2.jpg'
                    />
                    <ProjectBox
                        title='تغییر دیدگاه'
                        subtitle='استودیو'
                        img='/images/work/3.jpg'
                    />
                    <ProjectBox
                        title='لوازم آرایشی اسپا'
                        subtitle='در حال توسعه'
                        img='/images/work/4.jpg'
                    />
                </div>
                <SectionHeader title='همه چیز را در مورد خود ببینید کارمند در یک مکان.'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                    <div className='flex items-center gap-3 justify-center mt-6'>
                        <PrimaryButton
                            title='اکنون شروع کنید'
                        />
                        <a className='bg-transparent border border-primary text-primary font-IranSansFaNum-Bold px-5 py-2 rounded-md transition-all duration-500 hover:bg-primary hover:text-white hover:shadow hover:shadow-primary/30' href="#">
                            رایگان امتحان کنید
                        </a>
                    </div>
                </SectionHeader>
            </div>
        </section>
    )
}