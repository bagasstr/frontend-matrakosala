import cn from "@/lib/cn";
const Pertanyaan = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className='w-full'>
          <h1 className='uppercase text-primary text-center mb-4'>
            Pertanyaan
          </h1>
          <p className='text-2xl text-center mb-8 text-text w-[80%] mx-auto'>
            Semua Yang Perlu Anda Ketahui Tentang Layanan dan Solusi Kami
          </p>
          <div className='w-[60%] mt-24 ml-4'>
            <h1 className='text-xl font-normal text-text'>Butuh Bantuan?</h1>
            <hr className='my-4' />
            <div className='mb-4'>
              <h2 className='text-primary mb-2 font-normal text-base'>
                Dukungan Teknis
              </h2>
              <ul className='text-sm font-light'>
                <li className='flex gap-x-2'>
                  <span>-</span> <h1 className=''>Respon Cepat</h1>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span>
                  <h1>Pemecah Masalah dan Diagnosis Masalah</h1>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> <h1 className=''>Dipantau Jarak Jauh</h1>
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Kunjungan ke Lokasi
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Layanan Pemeliharaan
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Dokumentasi dan Pelatihan
                </li>
              </ul>
            </div>
            <div className=''>
              <h2 className='text-primary mb-2 font-normal text-base'>
                Pelayanan Pelanggan
              </h2>
              <ul className='text-sm font-light'>
                <li className='flex gap-x-2'>
                  <span>-</span> Respon Tepat Waktu
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Komunikasi Jelas
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Penyelesaian Masalah
                </li>
                <li className='flex gap-x-2'>
                  <span>-</span> Kepuasan Pelanggan
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-24 flex justify-center flex-col gap-y-4'>
            <div className='p-4 bg-primary'>
              <p className='text-sm font-normal text-textLight'>
                What services do you offer? Posuere nulla diam tristique
                euismod. Eu gravida pellentesque erat ornare gravida
                pellentesque amet egestas. Montes at.
              </p>
            </div>
            <div className='p-4 bg-accent'>
              <p className='text-sm font-normal text-primary'>
                What services do you offer? Posuere nulla diam tristique
                euismod. Eu gravida pellentesque erat ornare gravida
                pellentesque amet egestas. Montes at.
              </p>
            </div>
            <div className='p-4 bg-accent'>
              <p className='text-sm font-normal text-primary'>
                What services do you offer? Posuere nulla diam tristique
                euismod. Eu gravida pellentesque erat ornare gravida
                pellentesque amet egestas. Montes at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pertanyaan;
