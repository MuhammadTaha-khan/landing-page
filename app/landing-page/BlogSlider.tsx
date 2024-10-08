

import { useContent } from '@/providers';
import { useRef } from 'react';
import 'swiper/css';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


export default function BlogSlider() {
    const sliderRef = useRef<any>(null);
    const { content } = useContent();
    const handleNext = () => {
        sliderRef.current.swiper.slideNext();
    };
    const handlePrevious = () => {
        sliderRef.current.swiper.slidePrev();
    };

    return (
        <>
            <section className="bg-white blog">
                <div className="max-w-screen-xl px-4 py-[5rem] mx-auto">
                    <Swiper
                        ref={sliderRef}
                        effect={'coverflow'} grabCursor={true} centeredSlides={true}
                        slidesPerView={1}
                        initialSlide={1}
                        slideActiveClass="active-blog"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2.8,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[EffectCoverflow, Navigation, Pagination]}>
                        {
                            content?.blogs?.map((x, i) => {
                                return (
                                    <div className="my-3 rounded-xl" key={i}>
                                        <SwiperSlide>
                                            <div className="bg-white rounded-lg shadow-custom p-8">
                                                <h2 className="text-3xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: x?.title }}></h2>
                                                <p className="mt-6 text-gray-600" dangerouslySetInnerHTML={{ __html: x?.text }}></p>
                                                <div className="flex items-center mt-8">
                                                    <div className="h-12 w-12 rounded-full overflow-hidden">
                                                        <img src={x?.authorImage} alt="Profile Picture" className="object-cover h-full w-full" />
                                                    </div>
                                                    <span className="ml-3 text-lg font-medium mr-3" dangerouslySetInnerHTML={{ __html: x?.authorName }}></span>
                                                    <div className="relative w-6 h-6 rounded-full">
                                                        <span className="absolute inset-0 flex items-center justify-center">
                                                            <span className="w-2 h-2 bg-black rounded-full dot"></span>
                                                        </span>
                                                    </div>
                                                    <span className="ml-3" dangerouslySetInnerHTML={{ __html: x?.date }}></span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                );
                            })
                        }

                    </Swiper>
                    <div className="flex items-center justify-center mt-6">
                        <div className="relative w-6 h-6 rounded-full cursor-pointer" onClick={handlePrevious}>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-4 h-4 bg-[#999999] rounded-full dot"></span>
                            </span>
                        </div>
                        <div className="relative w-16 h-6 rounded-full">
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-14 h-4 rounded-full dot current-slide-dot"></span>
                            </span>
                        </div>
                        <div className="relative w-6 h-6 rounded-full cursor-pointer" onClick={handleNext}>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-4 h-4 bg-[#999999] rounded-full dot"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <img src="/images/utils/tube_4.png" className="tube_4" />
                <img src="/images/utils/tube_3.png" className="tube_5" />
            </section>
        </>
    );
}
