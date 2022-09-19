import React from "react";
import Image from "next/image";
import { bannerPasteles } from "@/data/bannerPasteles";
import Container from "../ui/Container";
import Button from "../ui/Button";

const BannerPage = () => {
  return (
    <section className="pt-4 pb-16">
      <Container>
        <h2 className="py-4 mb-4 text-3xl leading-loose text-center text-gray-700 md:text-4xl font-display">
          <span className="text-emerald-500">varios temas...</span>{" "}
          <span className="text-orange-500">varios colores...</span>{" "}
          <span className="text-fuchsia-500">varios sabores...</span>
        </h2>
        <hr className="border-solid bottom-1 border-amber-200" />

        <div className="grid grid-cols-1 gap-0 mt-8 text-white lg:grid-cols-4 bg-slate-900 h-[1800px] lg:h-[1000px] xl:h-[800px]">
          <div className="relative lg:col-span-2 lg:row-span-2 group">
            <Image
              src={bannerPasteles[0].imagen}
              alt="Name Categorias"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="transition-all duration-200 ease-linear scale-100 opacity-50 group-hover:scale-110 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full px-8 py-6 bg-opacity-75 bg-slate-700 group-hover:bg-opacity-25">
              <div>
                <h2 className="text-2xl font-body">
                  {bannerPasteles[0].titulo}
                </h2>
              </div>
              <Button linkButton={bannerPasteles[0].link} text="Ver más" />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={bannerPasteles[1].imagen}
              alt="Name Categorias"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="transition-all duration-200 ease-linear scale-100 opacity-50 group-hover:scale-110 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full px-8 py-6 bg-opacity-75 bg-slate-700 group-hover:bg-opacity-25">
              <div>
                <h2 className="text-2xl font-body">
                  {bannerPasteles[1].titulo}
                </h2>
              </div>
              <Button linkButton={bannerPasteles[1].link} text="Ver más" />
            </div>
          </div>
          <div className="relative lg:row-span-2 group">
            <Image
              src={bannerPasteles[2].imagen}
              alt="Name Categorias"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="transition-all duration-200 ease-linear scale-100 opacity-50 group-hover:scale-110 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full px-8 py-6 bg-opacity-75 bg-slate-700 group-hover:bg-opacity-25">
              <div>
                <h2 className="text-2xl font-body">
                  {bannerPasteles[2].titulo}
                </h2>
              </div>
              <Button linkButton={bannerPasteles[2].link} text="Ver más" />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={bannerPasteles[3].imagen}
              alt="Name Categorias"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="transition-all duration-200 ease-linear scale-100 opacity-50 group-hover:scale-110 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full px-8 py-6 bg-opacity-75 bg-slate-700 group-hover:bg-opacity-25">
              <div>
                <h2 className="text-2xl font-body">
                  {bannerPasteles[3].titulo}
                </h2>
              </div>
              <Button linkButton={bannerPasteles[3].link} text="Ver más" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerPage;
