import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICategoria } from "@/interfaces/categoria";
import PastelesImg from "@/public/img/pasteles-deliza-cake-art.png";
import Button from "../ui/Button";

interface CategoryListCardProps {
  category: ICategoria;
}

const CategoryListCard: FC<CategoryListCardProps> = ({ category }) => {
  const { slug, nombre, descripcion, pasteles } = category;
  return (
    <div className="w-full max-w-xs transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl">
      <Link href={`/pasteles/categoria/${slug}`} passHref prefetch={false}>
        <a>
          <Image
            src={PastelesImg}
            alt={nombre}
            layout="responsive"
            width={577}
            height={443}
          />

          <div className="px-6 py-4">
            <h3 className="pt-2 pb-8 text-2xl text-center font-display">
              {nombre}
            </h3>
            {descripcion && (
              <p className="pb-4 text-center font-body">{descripcion}</p>
            )}
            <p className="text-center font-body">{`${pasteles.length} pasteles en esta categoria`}</p>
          </div>
        </a>
      </Link>
      <div className="flex justify-center py-8 text-white">
        <Button
          linkButton={`/pasteles/categoria/${slug}`}
          text="Ver Pasteles"
        />
      </div>
    </div>
  );
};

export default CategoryListCard;
