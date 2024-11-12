"use client";
import cn from "@/lib/cn";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import logoWhite from "../../assets/LogoWhite.png";
import { AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollLogo, setIsScrollLogo] = useState(false);
  const [state, setState] = useState({
    produk: false,
    materialStruktur: false,
    materialArsitektur: false,
  });
  const toggleClick = (key) => {
    setState((prevState) => {
      if (key === "materialStruktur") {
        return {
          ...prevState,
          materialStruktur: !prevState.materialStruktur,
          produk: false,
        };
      } else if (key === "materialArsitektur") {
        return {
          ...prevState,
          materialArsitektur: !prevState.materialArsitektur,
          produk: false,
        };
      } else if (key === "produk") {
        const newProdukState = !prevState.produk;
        return {
          ...prevState,
          produk: newProdukState,
          materialStruktur: newProdukState ? prevState.materialStruktur : false,
          materialArsitektur: newProdukState
            ? prevState.materialArsitektur
            : false,
        };
      } else {
        return {
          ...prevState,
          [key]: !prevState[key],
        };
      }
    });
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrollLogo(true);
      } else {
        setIsScrollLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={cn(
          "py-4 flex fixed top-0 left-0 px-4 z-10 w-full mx-auto transition-all justify-between items-center text-text backdrop-blur-sm bg-gradient-to-b from-bg-textLight/40 to-transparent"
        )}>
        <Link href='/' className={cn(open ? "hidden" : "")}>
          <Image
            src={isScrollLogo ? logo : logoWhite}
            alt='logo'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            className='w-full h-full'
          />
        </Link>
        <div
          className={cn("cursor-pointer", open ? "hidden" : "")}
          onClick={() => {
            setOpen(!open);
          }}>
          <AlignJustify
            className={cn(
              "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw text-textLight",
              isScrollLogo ? "text-text" : "text-textLight"
            )}
          />
        </div>
        <div
          className={cn(
            open ? "flex" : "hidden",
            "absolute top-0 w-full left-0 p-4 h-screen bg-white backdrop-blur-sm z-10"
          )}>
          <div className='py-4 flex fixed top-0 left-0 px-4 z-10 w-full mx-auto justify-between items-center text-text'>
            <Link href='/' className={cn("")}>
              <Image
                src={logo}
                alt='logo'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                objectFit='cover'
                className='w-full h-full'
              />
            </Link>
            <div
              className={cn("cursor-pointer")}
              onClick={() => {
                setOpen(!open);
              }}>
              <AlignJustify
                className={cn(
                  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                )}
              />
            </div>
          </div>
          <div className='pt-14 w-full'>
            <ul className={cn("flex flex-col w-full")}>
              <Link href='/' className={cn("my-2 text-base font-normal")}>
                Beranda
              </Link>
              <Link href='/' className={cn("my-2 text-base font-normal")}>
                Jasa Konstruksi
              </Link>
              <ul
                onClick={() => toggleClick("produk")}
                className={cn("my-2 text-base font-normal cursor-pointer")}>
                <div className='flex items-center justify-between w-full'>
                  Produk
                  {state.produk ? (
                    <ChevronUp className='w-5 h-5' />
                  ) : (
                    <ChevronDown className='w-5 h-5' />
                  )}
                </div>
                <ul
                  className={cn(
                    "flex flex-col",
                    state.produk ? "block" : "hidden"
                  )}>
                  <ul
                    onClick={() => toggleClick("materialStruktur")}
                    className={cn(
                      "my-2 text-base font-normal cursor-pointer pl-5"
                    )}>
                    <div className='flex items-center my-3 justify-between w-full'>
                      Material Struktur
                      {state.materialStruktur ? (
                        <ChevronUp className='w-5 h-5' />
                      ) : (
                        <ChevronDown className='w-5 h-5' />
                      )}
                    </div>
                    <div
                      className={cn(
                        "pl-5",
                        state.produk ? null : "hidden",
                        state.materialStruktur ? "flex flex-col" : "hidden"
                      )}>
                      <Link
                        href='/material-struktur'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Struktur
                      </Link>
                      <Link
                        href='/'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Struktur
                      </Link>
                      <Link
                        href='/'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Struktur
                      </Link>
                    </div>
                  </ul>
                  <ul
                    onClick={() => toggleClick("materialArsitektur")}
                    className={cn(
                      "my-2 text-base font-normal cursor-pointer pl-5"
                    )}>
                    <div className='flex items-center justify-between my-3 w-full'>
                      Material Arsitektur
                      {state.materialArsitektur ? (
                        <ChevronUp className='w-5 h-5' />
                      ) : (
                        <ChevronDown className='w-5 h-5' />
                      )}
                    </div>
                    <div
                      className={cn(
                        "pl-5",
                        state.materialArsitektur ? "flex flex-col" : "hidden"
                      )}>
                      <Link
                        href='/material-Arsitektur'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Arsitektur
                      </Link>
                      <Link
                        href='/'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Arsitektur
                      </Link>
                      <Link
                        href='/'
                        onClick={(prev) => setOpen(!prev)}
                        className={cn("my-2 text-base font-normal")}>
                        Material Arsitektur
                      </Link>
                    </div>
                    <Link
                      href='/'
                      className={cn(
                        "my-2 text-base font-normal disabled:cursor-not-allowed text-text/50"
                      )}>
                      Material MEP
                    </Link>
                  </ul>
                </ul>
              </ul>
              <Link href='/' className={cn("my-2 text-base font-normal")}>
                Profil
              </Link>
              <Link href='/' className={cn("my-2 text-base font-normal")}>
                Artikel
              </Link>
              <Link href='/' className={cn("my-2 text-base font-normal")}>
                Hubungi Kami
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
