import Header from "../../Components/Header/Header";
import Introduction from "../../Components/Introduction/Introduction";
import Companies from "../../Components/Companies/Companies";
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Specialties from "../../Components/Specialties/Specialties";
import Statistics from "../../Components/Statistics/Statistics";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";
import OurMind from "../../Components/OurMind/OurMind";
import LastNews from "../../Components/LastNews/LastNews";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
    return(
        <>
            <Header/>
            <main>
                <Introduction/>
                <Companies/>
                <Services/>
                <Aboutus/>
                <Specialties/>
                <Statistics/>
                <WorkProcess/>
                <OurMind/>
                <LastNews/>
            </main>
            <Footer/>
        </>
    )
}