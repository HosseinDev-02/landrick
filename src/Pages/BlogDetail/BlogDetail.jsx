import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import BreadCrumb from "../../Components/Breadcrumb/BreadCrumb";

export default function BlogDetail() {
    return (
        <>
            <Header/>
            <main>
                <PageHeader titleStyle='text-white text-3xl/[45px] max-w-[326px] w-full' className='bg-center' title='هوشمندترین برنامه ها برای کسب و کار شما' img='/images/1.jpg'/>
                <BreadCrumb page='جزئیات وبلاگ' items={[
                    {id: 1, title: 'لندریک'},
                    {id: 2, title: 'وبلاگ'},
                    {id: 3, title: 'جزئیات وبلاگ'}
                ]}/>
                <section>
                    <div className="container">

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}