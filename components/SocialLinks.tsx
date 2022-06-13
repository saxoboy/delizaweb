import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ul className="flex flex-row items-center justify-center mt-4 space-x-4">
      <li>
        <Link href="https://www.facebook.com/delizacakeart">
          <a className="social-links" target="_blank">
            <FaFacebook />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/delizacakeart">
          <a className="social-links" target="_blank">
            <FaInstagram />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://api.whatsapp.com/send?phone=+593987207224">
          <a className="social-links" target="_blank">
            <FaWhatsapp />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
