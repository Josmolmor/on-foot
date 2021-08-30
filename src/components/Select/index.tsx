import { FC } from "react";
import {
  Container,
  SelectContainer,
  CustomSelect,
  SelectIcon,
  Label,
} from "./styles";
import Props from "./types";

const Select: FC<Props> = ({
  label,
  onChange,
  className,
  children,
  ...rest
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <CustomSelect onChange={onChange} className={className}>
          {children}
        </CustomSelect>
        <SelectIcon />
      </SelectContainer>
    </Container>
  );
};

export default Select;
