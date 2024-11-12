"use client";
import cn from "@/lib/cn";
import Image from "next/image";
import ButtonSolid from "./ButtonSolid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Card = ({
  alt,
  title,
  ulasan,
  by,
  isPortfolio,
  isProduk,
  portfolioLink,
  produkLink,
  isImage,
  imageLink,
  isTestimoni,
}) => {
  return (
    <>
      <div className={cn("shadow-md p-8 mx-auto w-[80%]")}>
        {isImage && imageLink && (
          <figure className='w-[90%] mx-auto h-[200px] bg-primary'>
            <span className='block -translate-x-2 -translate-y-2 w-full h-full border-4 border-secondary'>
              <Image src={imageLink} fill alt={alt} className='w-full h-full' />
              {/* Ini untuk komponen portfolio dan produk */}
            </span>
          </figure>
        )}
        <div className='mt-8'>
          <h4 className='text-xl text-text mb-8'>{title}</h4>
          {isTestimoni && (
            <>
              <p className='text-text font-light italic'>"{ulasan}"</p>
              <h5 className='mt-2 text-primary'>- {by}</h5>
            </>
          )}
          {/* Link ini untuk komponen portfolio*/}
          {isPortfolio && portfolioLink && (
            <Link
              href={portfolioLink}
              className='flex items-center justify-end gap-x-2 text-primary'>
              Detail <ArrowRight />
            </Link>
          )}

          {/* ButtonSolid untuk komponen produk */}
          {isProduk && produkLink && (
            <ButtonSolid title='Cek Produk' links={produkLink} />
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
