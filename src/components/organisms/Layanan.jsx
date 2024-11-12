import cn from "@/lib/cn";
import Image from "next/image";
import image1 from "@/assets/ImageLayanan1.png";
import image2 from "@/assets/ImageLayanan2.png";
import image3 from "@/assets/ImageLayanan3.png";
const Layanan = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primary uppercase text-base mb-4'>
            Layanan Kami
          </h1>
          <h2 className='text-2xl text-text w-[60%] text-center mx-auto mb-8'>
            Layana Konstruksi Profesional Kami
          </h2>
          <p className='text-center w-[85%] mx-auto text-text font-light'>
            Memberikan layanan dengan integritas, profesionalitas, serta
            transparansi{" "}
          </p>
        </div>
        <div className='mt-20'>
          <div className='grid grid-cols-2 mb-14'>
            <figure className='relative h-[170px] w-[170px]'>
              <Image
                src={image1}
                alt='Layanan'
                fill
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <div className=''>
              <h1 className='text-xl text-primary'>DESAIN & PERENCANAAN</h1>
              <ul className='mt-4'>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Desain Interior</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Desain Bangunan</p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>-</span>
                  <p className=''>Desain Landscape</p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>-</span>
                  <p className=''>Site Plan</p>
                </li>
                <li className='flex gap-x-2 '>
                  <span>-</span>
                  <p className=''>Rencana Anggaran & Biaya ( RAB )</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-2 mb-14' dir='rtl'>
            <figure className='relative h-[170px] w-[170px]'>
              <Image
                src={image2}
                alt='Layanan'
                fill
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <div className=''>
              <h1 className='text-xl text-primary'>Kontraktor Pembangunan</h1>
              <ul className='mt-4'>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Struktur Bangunan</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Arsitektur Bangunan</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>MEP - Mechanical, Electrical, & Plumbing</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Interior Gedung dan Mebeluer</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Landscape</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <figure className='relative h-[170px] w-[170px]'>
              <Image
                src={image3}
                alt='Layanan'
                fill
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <div className=''>
              <h1 className='text-xl text-primary'>DESAIN & PERENCANAAN</h1>

              <ul className='mt-4'>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Pengawasan</p>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <p className=''>Manajemen Proyek</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layanan;
