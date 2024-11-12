import cn from "@/lib/cn";
const Statistik = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <div className='bg-accent py-10 w-[40%] px-10 flex flex-col justify-center items-center'>
            <h1 className='text-primary text-2xl mb-2'>15+</h1>
            <p className='text-center text-text text-sm'>Tahun Pengalaman</p>
          </div>
          <div className='bg-primary py-10 w-[40%] px-10 flex flex-col justify-center items-center'>
            <h1 className='text-textLight text-2xl mb-2'>99+</h1>
            <p className='text-textLight text-center text-sm'>Proyek Selesai</p>
          </div>
          <div className='bg-accent py-10 w-[40%] px-10 flex flex-col justify-center items-center'>
            <h1 className='text-primary text-2xl mb-2'>99+</h1>
            <p className='text-center text-text text-sm'>Klien Puas</p>
          </div>
          <div className='bg-accent py-10 w-[40%] px-10 flex flex-col justify-center items-center'>
            <h1 className='text-primary text-2xl mb-2'>21+</h1>
            <p className='text-center text-text text-sm'>Mitra Kami</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Statistik;
