import React from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";

import Container from "../ui/Container";

export type PropsBreadcrumb = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: ImageProps["src"];
  imageAlt?: string;
  overlay?: boolean;
  gradient?: boolean;
};

const Breadcrumb = ({
  title,
  imageAlt,
  subtitle,
  image,
  overlay = false,
  gradient = false,
}: PropsBreadcrumb) => {
  return (
    <div className="relative text-white h-80">
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="absolute h-80"
        />
      )}

      {overlay && (
        <div className="absolute inset-0 opacity-75 bg-neutral-700" />
      )}

      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-r from-black" />
      )}

      <header className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
        <Container>
          <div className="flex flex-col">
            <h1 className="pb-4 text-4xl font-bold tracking-wider font-display">
              {title}
            </h1>
            {subtitle && (
              <h3 className="text-2xl font-bold tracking-wider font-body">
                {subtitle}
              </h3>
            )}
          </div>
        </Container>
      </header>
    </div>
  );
};
export default Breadcrumb;
