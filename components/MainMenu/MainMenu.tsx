import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const MainMenu = () => {
  const [isMenuRespOpen, setIsMenuRespOpen] = useState(false);
  const handleMenuOpen = () => setIsMenuRespOpen(!isMenuRespOpen);
  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 w-full h-screen bg-slate-200 ${
          isMenuRespOpen
            ? " translate-y-0 transition-transform duration-200 ease-in-out"
            : "-translate-y-full transition-all duration-200 ease-in-out"
        }`}
      >
        <ResponsiveMenu
          isMenuRespOpen={isMenuRespOpen}
          setIsMenuRespOpen={setIsMenuRespOpen}
        />
      </div>

      <nav className="bg-purple-200">
        <div className="container mx-auto ">
          <div className="relative flex items-center justify-between px-4 py-5 text-xl font-body">
            <div className="flex items-center">
              <Image
                src="/img/Deliza-cake-art-logo.png"
                alt="Deliza Cake Art"
                width={150}
                height={55}
              />
            </div>
            <div className="px-4 md:hidden">
              <FaBars
                className="text-3xl text-purple-700 cursor-pointer"
                onClick={handleMenuOpen}
              />
            </div>
            <ul className="hidden space-x-4 text-center md:flex">
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/pasteles">
                  <a>Pasteles</a>
                </Link>
                {/* <ul>
                    <li>
                      <Link href="/pasteles/">
                        <a>Pasteles</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pasteles/tortas">
                        <a>Cupcakes</a>
                      </Link>
                    </li>
                  </ul> */}
              </li>
              <li>
                <Link href="/sobre-mi">
                  <a>Sobre Mi</a>
                </Link>
              </li>
              <li>
                <Link href="/contactos">
                  <a>Contactos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
