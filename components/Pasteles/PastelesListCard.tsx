import React, { FC } from "react";
import Container from "../ui/Container";

interface PastelesListCardProps {
  pasteles: any;
}

const PastelesListCard: FC<PastelesListCardProps> = ({ pasteles }) => {
  console.log({ pasteles });
  return (
    <Container>
      <h2>{pasteles}</h2>
    </Container>
  );
};

export default PastelesListCard;
