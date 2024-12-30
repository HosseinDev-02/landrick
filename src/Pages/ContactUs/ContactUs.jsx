import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React from "react";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import Input from "../../Components/Input/Input";

export default function ContactUs() {

    return (
        <>
            <Header changeMode={true}/>
            <main className='pt-[74px]'>
                <section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.973802644696!2d51.41548582636884!3d35.7022622788174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0177e812efab%3A0xac2453a4834d3bb5!2sTehran%20Province%2C%20Tehran%2C%20Ferdowsi%20Square%2C%20Iran!5e0!3m2!1sen!2sru!4v1735561589885!5m2!1sen!2sru"
                        width="100%" height="400" style={{border: '0px'}} allowFullScreen="" loading="lazy"></iframe>
                </section>
                <section className='my-20'>
                    <div className="container">
                        <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
                            <div className='w-full md:basis-1/2 lg:basis-5/12'>
                                <form className='p-6 shadow-sm shadow-sub-title/15 bg-body space-y-4' action="#">
                                    <div className='flex items-center gap-4'>

                                        <Input require={true} label='نام شما' placeholder='نام شما :' type='text' icon='user'/>
                                        <Input require={true} label='ایمیل شما' placeholder='ایمیل شما :' type='text' icon='envelope'/>
                                    </div>
                                    <Input require={true} label='موضوع' placeholder='موضوع' type='text' icon='book'/>

                                <Input className='resize-none' type='textarea' label='نظر شما' placeholder='نظر شما' icon='comment' require={true}/>
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