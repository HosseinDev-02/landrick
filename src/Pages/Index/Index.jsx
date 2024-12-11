import Header from "../../Components/Header/Header";
import Introduction from "../../Components/Introduction/Introduction";
import Companies from "../../Components/Companies/Companies";
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Specialties from "../../Components/Specialties/Specialties";
import Statistics from "../../Components/Statistics/Statistics";
import WorkProcess from "../../Components/WorkProcess/WorkProcess";

export default function Index() {
    return(
        <>
            <Header/>
            <main className='pb-40'>
                <Introduction/>
                <Companies/>
                <Services/>
                <Aboutus/>
                <Specialties/>
                <Statistics/>
                <WorkProcess/>
            </main>
        </>
    )
}