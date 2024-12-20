import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AboutusIntro from "../../Components/AboutusIntro/AboutusIntro";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import OurExperience from "../../Components/OurExperience/OurExperience";
import Companies from "../../Components/Companies/Companies";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";
import AboutusServices from "../../Components/AboutusServices/AboutusServices";
import AboutusTeam from "../../Components/AboutusTeam/AboutusTeam";
import PageHeader from "../../Components/PageHeader/PageHeader";

export default function AboutUs() {
    return (
        <>
            <Header/>
            <main>
                <PageHeader
                    title='درباره ما'
                    titleStyle='text-white'
                    caption='کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال
                    به آن نیاز دارید فراهم کند.'
                    img='/images/aboutus/introduction-bg.jpg'
                />
                <BreadCrumb
                    page='درباره ما'
                    items={[
                        {id: 1, title: 'لندریک'},
                        {id: 2, title: 'صفحه'},
                        {id: 3, title: 'درباره ما'},
                    ]}
                />
                <OurExperience/>
                <Companies className='!bg-body mt-6 !py-0'/>
                <WorkProcess
                    className='!bg-light-bg pt-[60px] md:pt-[100px]'
                />
                <AboutusServices/>
                <AboutusTeam/>
            </main>
            <Footer/>
        </>
    )
}