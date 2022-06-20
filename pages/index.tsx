import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DemoLayout from "../components/Layout/DemoLayout";
import SocialLinks from "../components/SocialLinks";

const Home: NextPage = () => {
  return (
    <DemoLayout>
      <Head>
        <title>Deliza Cake Art</title>
        <meta
          name="description"
          content="Pasteles con decoración temática de Crema y Fondant"
        />
      </Head>

      <main className="container relative mx-auto text-white">
        <div className="flex items-center justify-center px-4 pb-24 mx-auto">
          <Image
            src="/img/Deliza-cake-art-logo.png"
            alt="Deliza Web"
            layout="intrinsic"
            width={600}
            height={221}
            className="text-center"
          />
        </div>
        <h1 className="px-4 pb-8 text-5xl text-center lg:text-7xl font-body">
          Deliza Cake Art
        </h1>
        <h2 className="px-4 pb-8 text-3xl text-center font-body">
          Pasteles de Crema y Fondant
        </h2>
        <h3 className="px-4 pb-8 text-4xl text-center font-display">
          Sitio en Construcción
        </h3>

        <div className="flex justify-center px-4 pb-8 text-3xl font-body">
          <div className="leading-tight text-center">
            Haz tu pedido o siguenos en nuestras redes sociales <SocialLinks />
          </div>
        </div>
      </main>
    </DemoLayout>
  );
};

export default Home;
