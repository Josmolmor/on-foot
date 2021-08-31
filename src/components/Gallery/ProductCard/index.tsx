import { FC, useState } from "react";
import Props from "./types";
import {
  Container,
  HeartIcon,
  Img,
  Label,
  Info,
  Text,
  ReleasedText,
} from "./styles";
import { formatDistanceToNow, isValid } from "date-fns";

const ProductCard: FC<Props> = ({ className, name, releaseDate, image }) => {
  const [liked, setLiked] = useState(false);
  const date = new Date(releaseDate);
  const isValidDate = isValid(date);
  const formattedDistanceToNow = isValidDate
    ? formatDistanceToNow(new Date(date), { addSuffix: true })
    : "";

  return (
    <Container className={className}>
      <Img src={image} height={200} width={250} objectFit="contain" />
      <Label>
        <Info>
          <Text>{name}</Text>
          <HeartIcon onClick={() => setLiked(!liked)} liked={liked} />
        </Info>
        {isValidDate && <ReleasedText>{formattedDistanceToNow}</ReleasedText>}
      </Label>
    </Container>
  );
};

export default ProductCard;
