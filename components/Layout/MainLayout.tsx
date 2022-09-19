import React, { FC } from "react";
import Head from "next/head";
import Footer from "../Footer";
import MainMenu from "../MainMenu";
interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}
const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pastel, pasteles de fondand, tortas, tortas tematicas"
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={pageDescription} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        />
        <meta property="og:description" content={pageDescription} />
        {imageFullUrl ? (
          <meta property="og:image" content={imageFullUrl} />
        ) : (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_HOST_NAME}img/og-image-deliza-cake-art-default.jpg`}
          />
        )}
      </Head>
      <MainMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
