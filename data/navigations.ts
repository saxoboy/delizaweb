export interface Navigations {
  id: number;
  nombre: string;
  link: string;
  icon?: string;
  slug?: string;
  submenu?: SubNavigation[];
}
export interface SubNavigation {
  id: number;
  subName: string;
  subLink: string;
  slug: string;
  submenu?: SubNavigation[];
}

export const navigationData: Navigations[] = [
  { id: 1, nombre: "Inicio", link: "/", icon: "home", slug: "inicio" },
  {
    id: 2,
    nombre: "Productos",
    link: "#",
    icon: "productos",
    slug: "productos",
    submenu: [
      {
        id: 1,
        subName: "Pasteles",
        subLink: "/pasteles",
        slug: "pasteles",
        submenu: [
          {
            id: 1,
            subName: "En Crema",
            subLink: "/pasteles/crema",
            slug: "crema",
          },
          {
            id: 2,
            subName: "En Fondant",
            subLink: "/pasteles/fondant",
            slug: "fondant",
          },
        ],
      },
      {
        id: 2,
        subName: "Cupcakes",
        subLink: "/cupcakes",
        slug: "cupcakes",
      },
      {
        id: 3,
        subName: "Galletas",
        subLink: "/galletas",
        slug: "galletas",
      },
      {
        id: 4,
        subName: "Otros",
        subLink: "/productos/otros",
        slug: "otros",
      },
    ],
  },
  {
    id: 3,
    nombre: "Precios",
    link: "/precios",
    icon: "precios",
    slug: "precios",
  },
  {
    id: 4,
    nombre: "Galeria",
    link: "#",
    icon: "galeria",
    slug: "galeria",
    submenu: [
      {
        id: 1,
        subName: "Pasteles",
        subLink: "/galeria/pasteles",
        slug: "pasteles",
      },
      {
        id: 2,
        subName: "Cupcakes",
        subLink: "/galeria/cupcakes",
        slug: "cupcakes",
      },
      {
        id: 3,
        subName: "Galletas",
        subLink: "/galeria/galletas",
        slug: "galletas",
      },
    ],
  },
  {
    id: 5,
    nombre: "Sobre Mi",
    link: "/sobre-mi",
    icon: "sobre-mi",
    slug: "sobre-mi",
  },
  {
    id: 7,
    nombre: "Contactos",
    link: "/contactos",
    icon: "contactenos",
    slug: "contactos",
  },
];
