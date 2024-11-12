import cn from "@/lib/cn";
import Image from "next/image";
import hero from "../../../public/hero.jpg";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Mouse } from "lucide-react";
import ButtonOutline from "../atoms/ButtonOutline";
import ButtonSolid from "../atoms/ButtonSolid";
const Hero = () => {
  return (
    <>
      <div className={cn("relative w-full bg-slate-600 h-screen")}>
        {/* Gambar Latar Belakang */}
        <div className='relative w-full h-screen'>
          <Image
            src={"/hero.jpg"}
            alt='Hero Image'
            fill
            priority
            className='object-cover w-full h-full brightness-[80%]'
          />
          {/* Overlay Gradien */}
          <div className='absolute inset-0 bg-gradient-to-t from-slate-50/10 to-textLight blur-md h-[100px]' />
          <div className='absolute inset-0 bg-text bg-opacity-50 z-[0.7]' />
        </div>

        {/* Konten Teks */}
        <div className='absolute top-36 mx-4'>
          <h3 className='text-textLight underline underline-offset-8 decoration-textLight decoration-1 text-sm font-light'>
            GENERAL CONTRACTOR
          </h3>
          <h1 className='mt-5 w-[65%] text-2xl text-textLight'>
            Rancang, Bangun, dan Wujudkan Proyek Anda Bersama Kami
          </h1>
          <div className='absolute right-0'>
            <h4 className='text-textLight text-sm [writing-mode:vertical-lr] font-extralight'>
              ISO. 9001 TAHUN 2015
            </h4>
          </div>
          <h2 className='text-textLight mt-5 font-light w-[60%]'>
            Dengan pengalaman dan teknologi terbaru, kami hadir untuk memberikan
            solusi konstruksi yang efisien dan berkualitas.
          </h2>
          <div className='mt-10 space-y-8'>
            <ButtonOutline title='company profile' links='' />
            <ButtonSolid title='konsultasi segera' links='/konsultasi' />
          </div>
          <div className='flex justify-center mt-40'>
            <Mouse className='text-textLight w-6 h-6' />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
