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
        <div className="flex items-center justify-center pb-24 mx-auto">
          <Image
            src="/img/Deliza-cake-art-logo.png"
            alt="Deliza Web"
            layout="intrinsic"
            width={600}
            height={221}
            className="text-center"
          />
        </div>
        <h1 className="pb-8 text-center text-9xl">Deliza Cake Art</h1>
        <h2 className="pb-8 text-6xl text-center">
          Pasteles de Crema y Fondant
        </h2>
        <h3 className="pb-8 text-4xl text-center">Sitio en Construcción</h3>

        <div className="flex justify-center pb-8 text-3xl">
          <div className="leading-tight">
            Haz tu pedido o siguenos en nuestras redes sociales <SocialLinks />
          </div>
        </div>
      </main>
    </DemoLayout>
  );
};

export default Home;
