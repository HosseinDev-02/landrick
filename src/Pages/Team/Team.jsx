import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TeamBox from "../../Components/TeamBox/TeamBox";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";

export default function Team() {
    return (

        <>
            <Header changeMode={true}/>
            <main>
                <PageHeader bgColor='rgb(var(--color-light-bg))' titleStyle='text-title' title='اعضای تیم'/>
                <BreadCrumb items={[
                    {id:1, title: 'لندریک'},
                    {id:2, title: 'صفحه'},
                    {id:3, title: 'تیم'},
                ]} page='تیم'/>
                <section className='mt-14 mb-[60px] md:mb-[100px]'>
                    <div className="container">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                            <TeamBox
                                img='/images/team/03%20(1).jpg'
                                name='رونی جفرا'
                                job='توسعه دهنده'
                            />
                            <TeamBox
                                img='/images/team/02%20(1).jpg'
                                name='میکایل'
                                job='کارگردان'
                            />
                            <TeamBox
                                img='/images/team/01%20(1).jpg'
                                name='موسی ماری'
                                job='مدیریت'
                            />
                            <TeamBox
                                img='/images/team/05.jpg'
                                name='کالوین لورس'
                                job='امنیت'
                            />
                            <TeamBox
                                img='/images/team/04.jpg'
                                name='جعفر عباسی'
                                job='طراح'
                            />
                            <TeamBox
                                img='/images/team/06.jpg'
                                name='لوسی'
                                job='سئو'
                            />
                            <TeamBox
                                img='/images/team/08.jpg'
                                name='صدرا خان'
                                job='ادیتور'
                            />
                            <TeamBox
                                img='/images/team/07.jpg'
                                name='موسی ماری'
                                job='مدیریت'
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>

    )
}