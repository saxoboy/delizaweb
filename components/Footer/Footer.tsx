import Image from "next/image";
import SocialLinks from "../SocialLinks";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <>
      <div className="h-96"></div>
      <footer className="font-body bg-slate-500">
        <Container>
          <div className="flex gap-5 py-8">
            <div className="flex flex-col items-center justify-center basis-2/5 ">
              <Image
                src="/img/deliza-cake-art-logo-white.png"
                alt="Deliza Cake Art"
                width={200}
                height={74}
              />
              <p className="py-4 text-center text-slate-200">
                Nos especializamos en la elaboración de tortas, galletas y
                repostería en general para todo compromiso social, con detalles
                personalizados, decorados de acuerdo a la temática del evento.
              </p>
            </div>
            <div className="basis-1/5"></div>
            <div className="px-4 basis-1/5">
              <h3 className="py-2 mb-4 text-2xl text-yellow-200 uppercase border-b border-yellow-200 border-solid">
                Productos
              </h3>
              <ul>
                <li>Pasteles</li>
                <li>Cupcakes</li>
                <li>Galletas</li>
              </ul>
            </div>
            <div className="px-4 basis-1/5">
              <h3 className="py-2 mb-4 text-2xl text-yellow-200 uppercase border-b border-yellow-200 border-solid">
                Galeria
              </h3>
              <ul>
                <li>Pasteles</li>
                <li>Cupcakes</li>
                <li>Galletas</li>
              </ul>
            </div>
            <div className="px-4 basis-1/5">
              <h3 className="py-2 mb-4 text-2xl text-yellow-200 uppercase border-b border-yellow-200 border-solid">
                Siguenos en
              </h3>
              <SocialLinks />
            </div>
          </div>
        </Container>
      </footer>
      <div className="py-4 text-sm italic text-center text-white bg-slate-600 font-body">
        <Container>
          <div className="flex justify-between">
            <div>
              Copyright © 2022 - Todos los derechos reservados - Cuenca,
              Ecuador.
            </div>
            <div>
              Developed by
              <a
                href="https://www.linkedin.com/in/israelherrerae/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-cyan-500"
              >
                {" "}
                Israel H.
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
