import React from "react";
import Link from "next/link";

const MainMenu = () => {
  return (
    <nav>
      <div className="container mx-auto">
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi">
              <a>Sobre Mi</a>
            </Link>
          </li>
          <li>
            <Link href="/contactos">
              <a>Contactos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
