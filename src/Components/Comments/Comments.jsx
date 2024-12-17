import SectionHeader from "../SectionHeader/SectionHeader";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../custom.css';
import CommentBox from "../CommentBox/CommentBox";

export default function Comments() {
    return (
        <section className='my-[60px] md:my-[100px]'>
            <div className="container">
                <SectionHeader title='نظرات مشتریان'>
                    <p className='max-w-[600px] w-full mx-auto'>
                        شروع به کار با <span className='text-primary font-IranSansFaNum-Bold'>لنـدریـک</span> که می
                        تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ،
                        اتصال به آن نیاز دارید فراهم کند.
                    </p>
                </SectionHeader>
                <div className='mt-8'>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                        }}
                        slidesPerView={1}
                        spaceBetween={24}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper !py-10 md:!px-3"
                    >
                        <SwiperSlide>
                            <CommentBox
                                name='باباکارما'
                                job='مترجم'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={5}
                                img='/images/team/01%20(1).jpg'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CommentBox
                                name='کارلوس'
                                job='P.A'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={4}
                                img='/images/team/02%20(1).jpg'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CommentBox
                                name='دین لوس'
                                job='توسعه دهنده'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={5}
                                img='/images/team/06.jpg'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CommentBox
                                name='چری استین'
                                job='مدیر'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={3}
                                img='/images/team/05.jpg'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CommentBox
                                name='جیل شبی'
                                job='امنیت شبکه'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={4}
                                img='/images/team/02%20(1).jpg'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CommentBox
                                name='توماس لوری'
                                job='طراح'
                                caption='" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه
                                        استفاده می شود باقی مانده است. "'
                                rate={3}
                                img='/images/team/04.jpg'
                            />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )
}