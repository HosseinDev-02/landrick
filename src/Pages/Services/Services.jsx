import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ServicesIntro from "../../Components/ServicesIntro/ServicesIntro";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import OurServices from "../../Components/OurServices/OurServices";
import Commnets from "../../Components/Comments/Comments";
import LastProjects from "../../Components/LastProjects/LastProjects";

export default function Services() {
    return (
        <>
            <Header changeMode={true}/>
                <main>
                    <ServicesIntro/>
                    <BreadCrumb
                        page='خدمات'
                    />
                    <OurServices/>
                    <Commnets/>
                    <LastProjects/>
                </main>
            <Footer/>
        </>
    )
}