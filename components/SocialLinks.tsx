import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ul className="flex flex-row items-center justify-center space-x-3 text-3xl">
      <li>
        <Link href="https://www.facebook.com/delizacakeart">
          <a
            className="social-links"
            target="_blank"
            title="Deliza Cake Art en Facebook"
          >
            <FaFacebook />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/delizacakeart">
          <a
            className="social-links"
            target="_blank"
            title="Deliza Cake Art en Instagram"
          >
            <FaInstagram />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://api.whatsapp.com/send?phone=+593987207224">
          <a
            className="social-links"
            target="_blank"
            title="Cotiza tu pastel aqui"
          >
            <FaWhatsapp />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
