"use client";
import cn from "@/lib/cn";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import trad from "@/assets/foto-TRAD.png";
import ButtonSolid from "../atoms/ButtonSolid";
import Card from "../atoms/Card";

const SwipperPortofolio = () => {
  const swiperRef = useRef(null);
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isEnd: false,
  });

  const onSlideChange = () => {
    handleSlideByState({
      isFirst: swiperRef.current.swiper.isBeginning,
      isEnd: swiperRef.current.swiper.isEnd,
    });
  };

  const { isFirst, isEnd } = slideBegOrNot;

  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={false}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        onSlideChange={onSlideChange}
        modules={[Navigation, Pagination]}
        breakpoints={{
          // Ketika lebar layar >= 640px, tampilkan 2 kartu per tampilan
          640: {
            slidesPerView: 2,
          },
          // Ketika lebar layar >= 1024px, tampilkan 3 kartu per tampilan
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={false}>
        <div className=''>
          <SwiperSlide className='my-8'>
            <Card
              title='New Office & Store PT. T.RAD Indonesia'
              imageLink={trad}
              isImage={true}
              isPortfolio={true}
              portfolioLink='/portofolio'
              alt='bata ringan'
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              imageLink={trad}
              isImage={true}
              title='New Office & Store PT. T.RAD Indonesia'
              isPortfolio={true}
              portfolioLink='/portofolio'
              alt='bata ringan'
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              title='New Office & Store PT. T.RAD Indonesia'
              isImage={true}
              imageLink={trad}
              isPortfolio={true}
              portfolioLink='/portofolio'
              alt='bata ringan'
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className='mt-4 flex px-8 justify-between items-center'>
        <div className='space-x-8 '>
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>
            <CircleArrowLeft
              className={cn(
                "w-8 h-8 text-primary",
                isFirst ? "opacity-50" : "opacity-100"
              )}
            />
          </button>
          <button onClick={() => swiperRef.current.swiper.slideNext()}>
            <CircleArrowRight
              className={cn(
                "w-8 h-8 text-primary",
                isEnd ? "opacity-50" : "opacity-100"
              )}
            />
          </button>
        </div>
        <div className=''>
          <ButtonSolid title={"Lihat Semua"} links={"#"} />
        </div>
      </div>
    </>
  );
};
export default SwipperPortofolio;
