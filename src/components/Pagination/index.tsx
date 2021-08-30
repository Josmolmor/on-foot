import { FC } from "react";
import { Container } from "./styles";
import Props from "./types";
import { useRouter } from "next/router";
import Button from "@/components/Button";

const Pagination: FC<Props> = ({ pages, className }) => {
  const { query, push } = useRouter();

  return (
    <Container className={className}>
      {[...Array(pages)].map((x, i) => (
        <Button
          variant={Number(query.page) === i + 1 ? "main" : "secondary"}
          onClick={() => push({ search: `?page=${i + 1}` })}
          key={i}
        >
          {i + 1}
        </Button>
      ))}
    </Container>
  );
};

export default Pagination;
