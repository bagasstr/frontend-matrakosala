"use client";
import cn from "@/lib/cn";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useRef } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import trad from "@/assets/foto-TRAD.png";
import ButtonSolid from "../atoms/ButtonSolid";
import Card from "../atoms/Card";

const SwipperProduk = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
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
        pagination={{ clickable: true }}>
        <div className=''>
          <SwiperSlide className='my-8'>
            <Card
              title='New Office & Store PT. T.RAD Indonesia'
              path={trad}
              alt='bata ringan'
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              title='New Office & Store PT. T.RAD Indonesia'
              path={trad}
              alt='bata ringan'
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              title='New Office & Store PT. T.RAD Indonesia'
              path={trad}
              alt='bata ringan'
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className='mt-4 flex px-8 justify-between items-center'>
        <div className='space-x-8 '>
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>
            <CircleArrowLeft className='w-8 h-8 text-primary' />
          </button>
          <button onClick={() => swiperRef.current.swiper.slideNext()}>
            <CircleArrowRight className='w-8 h-8 text-primary' />
          </button>
        </div>
        <div className=''>
          <ButtonSolid title={"Lihat Semua"} links={"#"} />
        </div>
      </div>
    </>
  );
};
export default SwipperProduk;
