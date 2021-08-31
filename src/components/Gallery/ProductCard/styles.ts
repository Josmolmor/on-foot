import styled, { css } from "styled-components";
import Image from "next/image";
import { Heart } from "react-feather";

export const Container = styled.div`
  align-items: flex-start;
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

export const Label = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const HeartIcon = styled(Heart)<{ liked?: boolean }>`
  fill: #eaeaea;
  color: transparent;
  flex-shrink: 0;
  margin-left: 0.5rem;
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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 0.25rem;
`;

export const ReleasedText = styled.span`
  color: #8c8c8c;
  display: block;
  margin-top: auto;
`;
