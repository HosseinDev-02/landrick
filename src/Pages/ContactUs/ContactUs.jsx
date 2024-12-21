import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import React, {useState} from "react";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

export default function ContactUs() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBY_v_r4MLTPy2po_HjLjbWffvPzZoPcYo',
    })

    const [map, setMap] = useState(null)
    const center = {
        lat: 35.30453,
        lng: 50.49728,
    }

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        <>
            <Header changeMode={true}/>
            <main className='pt-[74px]'>
                <section>
                    {
                        isLoaded ? (
                            <GoogleMap
                                center={center}
                                mapContainerClassName='w-full h-[400px]'
                                zoom={2}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >

                            </GoogleMap>
                        ) : (
                            <></>
                        )
                    }
                </section>
                <section className='my-20'>
                    <div className="container">
                        <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
                            <div className='w-full md:basis-1/2 lg:basis-5/12'>
                                <form className='p-6 shadow-sm shadow-sub-title/15 bg-body space-y-4' action="#">
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <label
                                                className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                                نام شما <span className='text-error'>*</span>
                                            </label>
                                            <div className='relative'>
                                                <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                    <use href='#user'></use>
                                                </svg>
                                                <input placeholder='نام شما' type="text"
                                                       className='bg-body outline-none focus:border-primary transition-all duration-500 h-10 w-full rounded-md border border-light-border dark:border-[#495057] dark:focus:border-primary pr-12 p-1.5 pl-3 text-sm'/>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                                ایمیل شما <span className='text-error'>*</span>
                                            </label>
                                            <div className='relative'>
                                                <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                    <use href='#user'></use>
                                                </svg>
                                                <input placeholder='ایمیل شما' type="text"
                                                       className='bg-body outline-none focus:border-primary transition-all duration-500 h-10 w-full rounded-md border border-light-border dark:border-[#495057] dark:focus:border-primary pr-12 p-1.5 pl-3 text-sm'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                            موضوع <span className='text-error'>*</span>
                                        </label>
                                        <div className='relative'>
                                            <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                <use href='#user'></use>
                                            </svg>
                                            <input placeholder='موضوع' type="text"
                                                   className='bg-body outline-none focus:border-primary transition-all duration-500 h-10 w-full rounded-md border border-light-border dark:border-[#495057] dark:focus:border-primary pr-12 p-1.5 pl-3 text-sm'/>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            className='font-IranSansFaNum-Bold text-sm text-title mb-2 inline-block'>
                                            نظر شما <span className='text-error'>*</span>
                                        </label>
                                        <div className='relative'>
                                            <svg className='w-4 h-4 absolute right-4 top-3 text-title'>
                                                <use href='#user'></use>
                                            </svg>
                                            <textarea
                                                className='outline-none dark:border-[#495057] dark:focus:border-primary bg-body focus:border-primary transition-all duration-500 h-36 w-full rounded-md border border-light-border pr-12 py-1.5 pl-3 text-sm'
                                                placeholder='نظر شما'></textarea>
                                        </div>
                                    </div>
                                    <PrimaryButton title='ارسال پیام' className='!flex justify-center'/>
                                </form>
                            </div>
                            <div className="w-full md:basis-1/2 lg:basis-7/12">
                                <h4 className='text-2xl font-IranSansFaNum-Bold text-title mb-6'>
                                    جزئیات تماس با ما
                                </h4>
                                <p>
                                    شروع به کار با <span
                                    className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می تواند هر آنچه
                                    را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.
                                </p>
                                <div className='flex items-center gap-4 mt-4'>
                                    <svg className='w-7 h-7 text-title'>
                                        <use href='#envelope'></use>
                                    </svg>
                                    <div className='flex flex-col items-start'>
                                        <span className='font-IranSansFaNum-Bold text-title'>ایمیل</span>
                                        <a className='text-primary' href='mailto:contact@example.com'>contact@example.com</a>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mt-4'>
                                    <svg className='w-7 h-7 text-title'>
                                        <use href='#phone'></use>
                                    </svg>
                                    <div className='flex flex-col items-start'>
                                        <span className='font-IranSansFaNum-Bold text-title'>تلفن</span>
                                        <span className='text-primary'>+152 534-468-854</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mt-4'>
                                    <svg className='w-7 h-7 text-title'>
                                        <use href='#map'></use>
                                    </svg>
                                    <div className='flex flex-col items-start'>
                                        <span className='font-IranSansFaNum-Bold text-title'>آدرس</span>
                                        <span className='text-primary'>تهران ، منطقه 12 ، خیابان فلاح پور ، ساختمان 12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}