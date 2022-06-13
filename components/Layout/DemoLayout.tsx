import { url } from "inspector";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DemoLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute z-0 w-screen h-screen opacity-75 bg-slate-600" />
      <main
        className="bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('./bg/bg-1.jpg')" }}
      >
        <section className="z-10 flex items-center justify-center w-screen h-screen">
          {children}
        </section>
      </main>
    </div>
  );
};

export default DemoLayout;
