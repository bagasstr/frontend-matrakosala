import cn from "@/lib/cn";
import hubungikami from "@/assets/hubungikami.jpg";
import Image from "next/image";
const HubungiKami = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className=''>
          <h1 className='uppercase text-primary mb-4'>Hubungi Kami</h1>
          <h2 className='text-2xl mb-8 w-[60%] text-wrap text-text'>
            Siap Mewujudkan Proyek Impian Anda?
          </h2>
          <p className='w-[60%] text-text font-light'>
            Matrakosala siap membantu Anda! Jangan ragu untuk menghubungi kami
            untuk konsultasi gratis atau pertanyaan seputar layanan kami.
          </p>
          <div className='flex justify-center items-center mt-14'>
            <div className='w-[90%] mx-auto h-[200px] bg-primary'>
              <span className='block w-full h-full -translate-x-2 -translate-y-2 border-secondary border-2'>
                <Image
                  src={hubungikami}
                  alt='image'
                  fill
                  objectFit='cover'
                  className='w-full h-full'
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HubungiKami;
