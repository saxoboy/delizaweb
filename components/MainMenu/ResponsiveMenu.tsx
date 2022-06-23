import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaTimes } from "react-icons/fa";
import SocialLinks from "../SocialLinks";
import { navigationData } from "../../data/navigations";
interface Props {
  isMenuRespOpen: boolean;
  setIsMenuRespOpen: (isMenuRespOpen: boolean) => void;
}

const ResponsiveMenu = ({ isMenuRespOpen, setIsMenuRespOpen }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLiSelect, setIsLiSelect] = useState(false);
  const [isLiSelectUl, setIsLiSelectUl] = useState(false);
  const handleMenuOpen = () => setIsMenuRespOpen(!isMenuRespOpen);
  const handleLiSelect = () => {
    setIsLiSelect(!isLiSelect);
    setIsLiSelectUl(false);
  };
  const handleLiSelectUl = () => {
    setIsLiSelect(true);
    setIsLiSelectUl(!isLiSelectUl);
  };

  const backMenu = (
    itemNombre: string,
    handlerFn: React.MouseEventHandler<HTMLAnchorElement> | undefined
  ) => (
    <>
      <li className="pt-1">
        <a className="inline-flex text-2xl" onClick={handlerFn}>
          <span className="pr-4">
            <FaAngleDoubleLeft className="text-3xl" />
          </span>
          Atras
        </a>
      </li>
      <li className="pt-6 pb-4 text-xl leading-7 font-display cursor-none titleSubmenu">
        {itemNombre}
      </li>
    </>
  );

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

  useEffect(() => {
    if (typeof window === "object") {
      const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
      navExpand.forEach((item) => {
        console.log(item);
      });
    }
  }, []);

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
        <div className="relative flex justify-center">
          <nav className="menuResponsive">
            <ul>
              {navigationData.map((item) => (
                <li
                  key={item.id}
                  className={`${item.submenu ? "nav-expand" : ""}`}
                  id={String(item.id)}
                >
                  <Link href={item.link}>
                    <a
                      className="inline-flex"
                      onClick={item.submenu ? handleLiSelect : () => {}}
                    >
                      {item.nombre}
                      {item.submenu && (
                        <span className="pt-3 pl-4">
                          <FaAngleDoubleRight className="text-base" />
                        </span>
                      )}
                    </a>
                  </Link>
                  {item.submenu && (
                    <ul
                      id={String(item.id)}
                      className={`${
                        isLiSelect
                          ? "block h-auto bg-purple-300 cursor-text translate-x-0 duration-200 ease-in-out"
                          : "translate-x-full"
                      }`}
                    >
                      {isLiSelect && backMenu(item.nombre, handleLiSelect)}
                      {item.submenu.map((subitem) => (
                        <li
                          key={subitem.id}
                          className={`${
                            subitem.submenu ? "nav-expand-expand-content" : ""
                          }`}
                        >
                          <Link href={subitem.subLink}>
                            <a
                              onClick={
                                subitem.submenu ? handleLiSelectUl : () => {}
                              }
                            >
                              {subitem.subName}
                              {subitem.submenu && (
                                <span className="float-right pt-3 pl-4">
                                  <FaAngleDoubleRight className="text-base" />
                                </span>
                              )}
                            </a>
                          </Link>
                          {subitem.submenu && (
                            <ul
                              id={String(subitem.id)}
                              className={`${
                                isLiSelectUl
                                  ? "block h-auto bg-purple-300 cursor-text"
                                  : "translate-x-full"
                              }`}
                            >
                              {isLiSelectUl &&
                                backMenu(subitem.subName, handleLiSelectUl)}
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
        </div>
        <div className="py-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
