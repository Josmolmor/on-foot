import styled from "styled-components";
import { ChevronDown } from "react-feather";

export const Container = styled.div``;

export const Label = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

export const SelectContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CustomSelect = styled.select`
  background: white;
  border-radius: 0.25rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const SelectIcon = styled(ChevronDown)`
  color: black;
  height: 1rem;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  width: 1rem;
  transform: translateY(-50%);
`;
