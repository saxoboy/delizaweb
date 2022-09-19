import Image from "next/image";
import { NextPage } from "next";
import { GiCakeSlice, GiStairsCake } from "react-icons/gi";
import { SiCakephp } from "react-icons/si";
import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Container from "@/components/ui/Container";
import BannerPasteles from "@/components/Banner/BannerPasteles";
import PastelesByCategory from "@/components/Pasteles/PastelesByCategory";
import BreadcrumbImg from "@/public/img/breadcrumb.jpg";
import PastelesImg from "@/public/img/pasteles-deliza-cake-art.png";

const PastelesPage: NextPage = () => {
  return (
    <MainLayout
      title="Pasteles - Deliza Cake Art"
      pageDescription="Los mejores pasteles de fondant y crema"
    >
      <Breadcrumb
        title="Pasteles"
        subtitle="Los mejores pasteles de fondant y crema"
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        image={BreadcrumbImg}
        overlay={false}
        gradient={true}
      />

      <section className="pt-8 pb-4">
        <Container>
          <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
            <div className="pb-8">
              <Image
                src={PastelesImg}
                alt="Pasteles de fondant y crema"
                layout="responsive"
                width={577}
                height={443}
                priority={true}
                loading="eager"
              />
            </div>
            <div className="">
              <h4 className="pb-4 text-base text-center font-display lg:text-left">
                Pasteles de Crema y Fondat
              </h4>
              <h2 className="pb-4 text-6xl text-center font-body lg:text-left">
                Pasteles Tematicos
              </h2>
              <p className="pb-4 text-lg font-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                beatae ex obcaecati sit mollitia aut dolore possimus! Earum,
                suscipit necessitatibus quas, molestiae veniam expedita,
                voluptatum nam consequuntur ab assumenda ad!
              </p>
              <p className="pb-4 text-lg font-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                beatae ex obcaecati sit mollitia aut dolore possimus! Earum,
                suscipit necessitatibus quas, molestiae veniam expedita,
                voluptatum nam consequuntur ab assumenda ad!
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Portada */}
      <BannerPasteles />
      {/* Fin Portada */}
      <Container>
        <div className="pb-12">
          <h2 className="mb-6 text-3xl text-center text-gray-700 md:text-4xl font-display lg:text-left">
            Lo que podemos hacer por ti
          </h2>
          <hr />
          <div className="grid grid-cols-1 py-8 lg:grid-cols-3 gap-x-4 gap-y-6">
            <div className="p-6 bg-yellow-300 rounded-xl">
              <div className="flex justify-center">
                <GiCakeSlice className="text-3xl" />
                <h3 className="px-8 pb-2 mb-4 text-3xl text-center border-b border-solid font-display border-slate-900 w-min">
                  Masas
                </h3>
              </div>
              <ul className="mx-20 text-xl">
                <li className="pb-4 text-center">
                  <span className="text-2xl">Vainilla</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Chocolate</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Vainilla - Oreo</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Marmoleada</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-slate-300 rounded-xl">
              <div className="flex items-center justify-center">
                <GiStairsCake className="text-3xl" />
                <h3 className="px-8 pb-2 mb-4 text-3xl text-center border-b border-solid font-display border-slate-900 w-min">
                  Cubiertas y Decoraciones
                </h3>
              </div>
              <ul className="mx-20 text-xl">
                <li className="pb-4 text-center">
                  <span className="text-2xl">Fondant</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Crema Chantilly</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-fuchsia-300 rounded-xl">
              <div className="flex justify-center">
                <SiCakephp className="mt-1 text-3xl" />
                <h3 className="px-8 pb-2 mb-4 text-3xl text-center border-b border-solid font-display border-slate-900 w-min">
                  Rellenos
                </h3>
              </div>

              <ul className="mx-20 text-xl">
                <li className="pb-4 text-center">
                  <span className="text-2xl">Oreo (Cookies and cream)</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Chocolate</span>
                </li>
                <li className="pb-4 text-center">
                  <span className="text-2xl">Durazno y Almendras</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <section className="py-8">
        <PastelesByCategory />
      </section>
    </MainLayout>
  );
};

export default PastelesPage;
