import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaAngleDoubleRight } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import SocialLinks from "../SocialLinks";
import { navigationData } from "../../data/navigations";

const MainMenu = () => {
  const [isMenuRespOpen, setIsMenuRespOpen] = useState(false);
  const handleMenuOpen = () => setIsMenuRespOpen(!isMenuRespOpen);
  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 w-full h-screen bg-purple-200 ${
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
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between px-4 text-xl md:block lg:flex font-body">
            <div className="flex items-center py-4 md:justify-center">
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
            <nav className="menu">
              <ul>
                {navigationData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <a>
                        {item.nombre}
                        {item.submenu && (
                          <span className="float-right pt-1 pl-4">
                            <FaAngleDoubleRight />
                          </span>
                        )}
                      </a>
                    </Link>
                    {item.submenu && (
                      <ul>
                        {item.submenu.map((subitem) => (
                          <li key={subitem.id}>
                            <Link href={subitem.subLink}>
                              <a>
                                {subitem.subName}
                                {subitem.submenu && (
                                  <span className="float-right pt-1 pl-4">
                                    <FaAngleDoubleRight />
                                  </span>
                                )}
                              </a>
                            </Link>
                            {subitem.submenu && (
                              <ul>
                                {subitem.submenu.map((subsubitem) => (
                                  <li key={subsubitem.id}>
                                    <Link href={subsubitem.subLink}>
                                      <a>{subsubitem.subName}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:block">
              <SocialLinks />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
