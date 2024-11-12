"use client";
import cn from "@/lib/cn";
import SwipperPortofolio from "../molecules/SwipperPortofolio";
const Portofolio = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className=''>
          <h1 className='uppercase text-primary text-center mb-4'>
            Proyek Kami
          </h1>
          <h2 className='text-2xl text-center mb-8 text-text'>
            Proyek Terbaru Kami
          </h2>
          <div className=''>
            <SwipperPortofolio />
          </div>
        </div>
      </div>
    </>
  );
};
export default Portofolio;
