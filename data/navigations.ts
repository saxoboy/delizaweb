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
  suBIcon?: string;
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
        subLink: "#",
        suBIcon: "pasteles",
        slug: "pasteles",
        submenu: [
          {
            id: 1,
            subName: "Pasteles Crema",
            subLink: "/pasteles/crema",
            suBIcon: "crema",
            slug: "crema",
          },
          {
            id: 2,
            subName: "Pasteles Fondant",
            subLink: "/pasteles/fondant",
            suBIcon: "fondant",
            slug: "fondant",
          },
          {
            id: 3,
            subName: "Pasteles Tres",
            subLink: "/pasteles/crema",
            suBIcon: "crema",
            slug: "crema",
          },
          {
            id: 4,
            subName: "Pasteles Cuatro",
            subLink: "/pasteles/fondant",
            suBIcon: "fondant",
            slug: "fondant",
          },
        ],
      },
      {
        id: 2,
        subName: "Cupcakes",
        subLink: "/productos/cupcakes",
        suBIcon: "cupcakes",
        slug: "cupcakes",
      },
      {
        id: 3,
        subName: "Otros",
        subLink: "/productos/otros-productos",
        suBIcon: "cupcakes",
        slug: "otros-productos",
      },
    ],
  },
  {
    id: 3,
    nombre: "Precios",
    link: "#",
    icon: "precios",
    slug: "precios",
    submenu: [
      {
        id: 1,
        subName: "Precios 1",
        subLink: "/precios",
        suBIcon: "precios",
        slug: "precios",
        submenu: [
          {
            id: 1,
            subName: "Precios 1 - 1",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 2,
            subName: "Precios 1 - 2",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 3,
            subName: "Precios 1 - 3",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
        ],
      },
      {
        id: 2,
        subName: "Precios 2",
        subLink: "/precios",
        suBIcon: "precios",
        slug: "precios",
        submenu: [
          {
            id: 1,
            subName: "Precios 2 - 1",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 2,
            subName: "Precios 2 - 2",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 3,
            subName: "Precios 2 - 3",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
        ],
      },
      {
        id: 3,
        subName: "Precios 3",
        subLink: "/precios",
        suBIcon: "precios",
        slug: "precios",
        submenu: [
          {
            id: 1,
            subName: "Precios 3 - 1",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 2,
            subName: "Precios 3 - 2",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
          {
            id: 3,
            subName: "Precios 3 - 3",
            subLink: "/precios",
            suBIcon: "precios",
            slug: "precios",
          },
        ],
      },
    ],
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
        subName: "Galeria 1",
        subLink: "/galeria/galeria-1",
        suBIcon: "pasteles",
        slug: "pasteles",
      },
      {
        id: 2,
        subName: "Galeria 2",
        subLink: "/galeria/galeria-2",
        suBIcon: "cupcakes",
        slug: "cupcakes",
      },
      {
        id: 3,
        subName: "Galeria 3",
        subLink: "/galeria/galeria-3",
        suBIcon: "cupcakes",
        slug: "otros-productos",
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
    id: 6,
    nombre: "FAQ",
    link: "/preguntas-frecuentes",
    icon: "sobre-mi",
    slug: "preguntas-frecuentes",
  },
  {
    id: 7,
    nombre: "Contactos",
    link: "/contactos",
    icon: "contactenos",
    slug: "contactos",
  },
];
