import Header from "../../Components/Header/Header";
import Introduction from "../../Components/Introduction/Introduction";
import Companies from "../../Components/Companies/Companies";
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";
import Specialties from "../../Components/Specialties/Specialties";

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
            </main>
        </>
    )
}