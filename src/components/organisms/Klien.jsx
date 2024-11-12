import cn from "@/lib/cn";
import trad from "@/assets/TRAD.png";
import rri from "@/assets/RRI.png";
import pupr from "@/assets/PUPR.png";
import kemenkes from "@/assets/KEMENKES.png";
import bri from "@/assets/BRI.png";
import abipraya from "@/assets/ABIPRAYA.png";
import mui from "@/assets/MUI.png";
import Image from "next/image";

const Klien = () => {
  return (
    <>
      <div className={cn("py-14 px-4")}>
        <h1 className='uppercase text-primary text-base text-center'>
          Klien Kami
        </h1>
        <div className='grid grid-flow-col mt-8 opacity-40'>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={pupr}
              alt='pupr'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={trad}
              alt='trad'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={rri}
              alt='rri'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={kemenkes}
              alt='kemenkes'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={mui}
              alt='mui'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={abipraya}
              alt='abipraya'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
          <figure className='relative h-[40px] w-[40px]'>
            <Image
              src={bri}
              alt='bri'
              fill
              objectFit='contain'
              className='w-full h-full'
            />
          </figure>
        </div>
      </div>
      <hr className='mx-4' />
    </>
  );
};
export default Klien;
