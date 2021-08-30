import { FC, useState } from "react";
import Props from "./types";
import { Container, HeartIcon, Img, Label } from "./styles";

const ProductCard: FC<Props> = ({ className, name, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Container className={className}>
      <Img src={image} height={200} width={250} objectFit="contain" />
      <Label>
        {name} <HeartIcon onClick={() => setLiked(!liked)} liked={liked} />
      </Label>
    </Container>
  );
};

export default ProductCard;
