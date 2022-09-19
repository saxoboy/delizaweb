import Link from "next/link";

interface ButtonProps {
  linkButton: string;
  text: string;
}
const Button = ({ linkButton, text }: ButtonProps) => {
  return (
    <Link href={linkButton}>
      <a className="w-40 px-8 py-2 text-sm transition duration-500 transform bg-purple-300 hover:bg-purple-500 rounded-3xl max-w-max">
        {text}
      </a>
    </Link>
  );
};

export default Button;
