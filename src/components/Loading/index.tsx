import { FC } from "react";
import Container from "./styles";

const Loading: FC = ({ ...rest }) => {
  return (
    <Container>
      <h1 {...rest}>Loading...</h1>
    </Container>
  );
};

export default Loading;
