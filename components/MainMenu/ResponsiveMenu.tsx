import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import SocialLinks from "../SocialLinks";

interface Props {
  isMenuRespOpen: boolean;
  setIsMenuRespOpen: (isMenuRespOpen: boolean) => void;
}

const ResponsiveMenu = ({ isMenuRespOpen, setIsMenuRespOpen }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLiSelect, setIsLiSelect] = useState(false);
  const handleMenuOpen = () => setIsMenuRespOpen(!isMenuRespOpen);
  const handleLiSelect = () => setIsLiSelect(!isLiSelect);

  const backMenu = `
  <li className="itemMenuResponsive">
    <a>Back</a>
  </li>`;
  console.log(backMenu);

  const viewport = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMenuRespOpen(false);
    }
    return window.innerWidth;
  };

  useEffect(() => {
    viewport();
    window.addEventListener("resize", viewport);
    return () => window.removeEventListener("resize", viewport);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <div className="relative flex items-center justify-center h-full align-middle">
      <div className="container absolute top-0 right-0 z-20 flex justify-end p-8">
        <FaTimes
          className="text-3xl text-right text-purple-700 cursor-pointer"
          onClick={handleMenuOpen}
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center pb-8">
          <Image
            src="/img/Deliza-cake-art-logo.png"
            alt="Deliza Cake Art"
            width={280}
            height={103}
          />
        </div>
        <ul className="relative flex-col overflow-hidden overflow-y-auto text-3xl text-center text-white font-body min-h-[300px]">
          <li className="itemMenuResponsive">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li
            onClick={handleLiSelect}
            className={`itemMenuResponsive ${
              isLiSelect ? "translate-x-0 visible" : ""
            }`}
          >
            Pasteles
          </li>
          <ul
            className={`absolute top-0 left-0 h-screen bg-slate-600 ${
              isLiSelect
                ? "visible translate-x-0"
                : "invisible translate-x-full"
            } w-full h-full`}
          >
            <li className="pl-8 itemMenuResponsive" onClick={handleLiSelect}>
              <a className="flex items-stretch space-x-4">
                <FaArrowLeft className="self-center" />
                <span>Volver</span>
              </a>
            </li>
            <li className="itemMenuResponsiveLi">
              <Link href="/pasteles/bodas">
                <a>Bodas</a>
              </Link>
            </li>
            <li className="itemMenuResponsiveLi">
              <Link href="/pasteles/tematicas">
                <a>Temáticas</a>
              </Link>
            </li>
          </ul>

          <li className="itemMenuResponsive">
            <Link href="/contactos">
              <a>Cupcakes</a>
            </Link>
          </li>

          <li className="itemMenuResponsive">
            <Link href="/contactos">
              <a>Galeria</a>
            </Link>
          </li>

          <li className="itemMenuResponsive">
            <Link href="/sobre-mi">
              <a>Sobre Mi</a>
            </Link>
          </li>
          <li className="itemMenuResponsive">
            <Link href="/contactos">
              <a>Contactos</a>
            </Link>
          </li>
          {/* <li onClick={() => setIsLiSelect(!isLiSelect)}>algo</li> */}
        </ul>
        <div className="py-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
