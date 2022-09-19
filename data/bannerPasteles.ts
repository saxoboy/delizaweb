import type { ImageProps } from "next/image";
import Portada1 from "@/public/img/portada-1.jpg";
import Portada2 from "@/public/img/portada-2.jpg";
import Portada3 from "@/public/img/portada-3.jpg";
import Portada4 from "@/public/img/portada-4.jpg";

export interface BannerPasteles {
  id: string;
  titulo: string;
  imagen: ImageProps["src"];
  link: string;
}

export const bannerPasteles: BannerPasteles[] = [
  {
    id: "1",
    titulo: "Pasteles Cumpleanos",
    imagen: Portada1,
    link: "/pasteles/cumpleanos",
  },
  {
    id: "2",
    titulo: "Pasteles Anime",
    imagen: Portada2,
    link: "/pasteles/anime",
  },
  {
    id: "3",
    titulo: "Pasteles de Bodas",
    imagen: Portada3,
    link: "/pasteles/bodas",
  },
  {
    id: "4",
    titulo: "Pasteles Infantiles",
    imagen: Portada4,
    link: "/pasteles/infantiles",
  },
];
