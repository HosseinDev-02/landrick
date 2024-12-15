import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AboutusIntro from "../../Components/AboutusIntro/AboutusIntro";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import OurExperience from "../../Components/OurExperience/OurExperience";
import Companies from "../../Components/Companies/Companies";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";
import AboutusServices from "../../Components/AboutusServices/AboutusServices";
import AboutusTeam from "../../Components/AboutusTeam/AboutusTeam";

export default function AboutUs() {
    return (
        <>
            <Header/>
            <main>
                <AboutusIntro/>
                <BreadCrumb/>
                <OurExperience/>
                <Companies className='!bg-body mt-6 !py-0'/>
                <WorkProcess
                    className='!bg-light-bg py-[100px]'
                />
                <AboutusServices/>
                <AboutusTeam/>
            </main>
            <Footer/>
        </>
    )
}