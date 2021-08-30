import styled, { css } from "styled-components";
import Image from "next/image";
import { Heart } from "react-feather";

export const Container = styled.div`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 1rem;
  transition: 0.25s border ease;

  &:hover {
    border: 0.0625rem solid #eaeaea;
  }
`;

export const Img = styled(Image)``;

export const Label = styled.span`
  align-items: center;
  display: flex;
  margin-top: 1rem;
  text-align: center;
`;

export const HeartIcon = styled(Heart)<{ liked?: boolean }>`
  fill: #eaeaea;
  color: transparent;
  margin-left: 1rem;
  flex-shrink: 0;
  transition: all 0.25s ease;

  ${({ liked }) =>
    !liked &&
    css`
      &:hover {
        fill: transparent;
        color: tomato;
      }
    `}

  ${({ liked }) =>
    liked &&
    css`
      fill: tomato;
    `}
`;
