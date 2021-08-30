import Props from "./types";
import { FC } from "react";
import { Container, Content, ProductPagination } from "./styles";
import ProductCard from "./ProductCard";

const Gallery: FC<Props> = ({ products, className, pagination }) => {
  return (
    <Container className={className}>
      <Content>
        {products &&
          products?.map(({ name, media }) => (
            <ProductCard name={name} image={media?.imageUrl} />
          ))}
      </Content>
      <ProductPagination pages={pagination} />
    </Container>
  );
};

export default Gallery;
