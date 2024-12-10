import Header from "../../Components/Header/Header";
import Introduction from "../../Components/Introduction/Introduction";
import Companies from "../../Components/Companies/Companies";
import Services from "../../Components/Services/Services";

export default function Index() {
    return(
        <>
            <Header/>
            <main className='pb-40'>
                <Introduction/>
                <Companies/>
                <Services/>
            </main>
        </>
    )
}