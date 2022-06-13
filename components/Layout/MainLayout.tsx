import React, { FC } from "react";
import Footer from "../Footer";
import MainMenu from "../MainMenu";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <MainMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
