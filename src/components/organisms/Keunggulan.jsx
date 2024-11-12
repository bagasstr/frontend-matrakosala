import cn from "@/lib/cn";
import Image from "next/image";
import layanan1 from "@/assets/IconLayanan1.png";
import layanan2 from "@/assets/IconLayanan2.png";
import layanan3 from "@/assets/IconLayanan3.png";
const Keunggulan = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className=''>
          <h1 className='uppercase text-primary text-center mb-4'>
            Mengapa Memilih Kami
          </h1>
          <h2 className='text-2xl text-center mb-8 text-text w-[60%] mx-auto'>
            Kualitas dan Mutu Bangunan Terjaga
          </h2>
          <p className='text-center text-text font-light w-[85%] mx-auto'>
            berkomitmen untuk memadukan kualitas dengan metodologi penghematan
            biaya yang didukung oleh tenaga ahli dan manajemen yang profesional.
          </p>
        </div>
        <div className='flex flex-col gap-y-10 justify-center items-center mt-20'>
          <div className='flex gap-y-4 flex-col justify-center items-center bg-accent py-10 w-[75%]'>
            <figure className='relative w-12 h-10'>
              <Image
                src={layanan1}
                alt='Layanan'
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <h2 className='text-lg text-text'>Percepatan</h2>
            <p className='text-center text-text font-light text-base w-[60%] mx-auto'>
              Penyelesaian pekerjaan dengan standar produktifitas tinggi.
            </p>
          </div>
          <div className='flex gap-y-4 flex-col justify-center items-center bg-accent py-10 w-[75%]'>
            <figure className='relative w-12 h-12'>
              <Image
                src={layanan2}
                alt='Layanan'
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <h2 className='text-lg text-text'>Supplier</h2>
            <p className='text-center text-text font-light text-base w-[60%] mx-auto'>
              Support dari Partner Brand untuk menyuplai material unggulan dalam
              kondisi yang terbaik.
            </p>
          </div>
          <div className='flex gap-y-4 flex-col justify-center items-center bg-accent py-10 w-[75%]'>
            <figure className='relative w-12 h-12'>
              <Image
                src={layanan3}
                alt='Layanan'
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
            <h2 className='text-lg text-text'>Strategi</h2>
            <p className='text-center text-text font-light text-base w-[60%] mx-auto'>
              Kombinasi dari metodologi penghematan biaya, tenaga ahli
              berpengalaman, dan manajemen yang profesional.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Keunggulan;
