import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";
import OurServices from "../../Components/OurServices/OurServices";
import Comments from "../../Components/Comments/Comments";
import LastProjects from "../../Components/LastProjects/LastProjects";
import PageHeader from "../../Components/PageHeader/PageHeader";

export default function Services() {
    return (
        <>
            <Header changeMode={true}/>
                <main>
                    <PageHeader titleStyle='text-title' title='خدمات' bgColor='rgb(var(--color-light-bg))'/>
                    <BreadCrumb
                        page='خدمات'
                        items={[
                            {id: 1, title: 'لندریک'},
                            {id: 2, title: 'صفحه'},
                            {id: 3, title: 'خدمات'},
                        ]}
                    />
                    <OurServices/>
                    <Comments/>
                    <LastProjects/>
                </main>
            <Footer/>
        </>
    )
}