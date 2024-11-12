import cn from "@/lib/cn";
import SwipperTestimoni from "../molecules/SwipperTestimoni";
const Testimoni = () => {
  return (
    <>
      <div className={cn("py-24 px-4")}>
        <div className=''>
          <h1 className='uppercase text-primary text-center mb-4'>Testimoni</h1>
          <h2 className='text-2xl text-center mb-8 text-text'>
            Apa Kata Mereka
          </h2>
          <div className=''>
            <SwipperTestimoni />
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimoni;
