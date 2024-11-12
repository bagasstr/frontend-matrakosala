"use client";
import cn from "@/lib/cn";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { CircleArrowLeft, CircleArrowRight, TreeDeciduous } from "lucide-react";
import trad from "@/assets/foto-TRAD.png";
import ButtonSolid from "../atoms/ButtonSolid";
import Card from "../atoms/Card";

const SwipperTestimoni = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
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
              title='Kerja Cepat'
              ulasan={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit enim mauris, eget malesuada lacus auctor at."
              }
              isTestimoni={TreeDeciduous}
              by={"CEO PT. T.RAD Indonesia"}
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              title='Rapih'
              ulasan={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit enim mauris, eget malesuada lacus auctor at."
              }
              isTestimoni={TreeDeciduous}
              by={"CEO PT. T.RAD Indonesia"}
            />
          </SwiperSlide>
          <SwiperSlide className='my-8'>
            <Card
              title='Harga Terjangkau'
              ulasan={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit enim mauris, eget malesuada lacus auctor at."
              }
              isTestimoni={TreeDeciduous}
              by={"CEO PT. T.RAD Indonesia"}
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};
export default SwipperTestimoni;
