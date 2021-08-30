import { FC } from "react";
import { Container, Title } from "./styles";
import Link from "next/link";

const Navbar: FC = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Link href="/">
        <a>
          <Title>On foot</Title>
        </a>
      </Link>
    </Container>
  );
};

export default Navbar;
