import { FC } from "react";
import Container from "./styles";

const Main: FC = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Main;
