import styled, { css } from "styled-components";
import { StyledProps } from "./types";

export const Text = styled.span.attrs({ as: "span" })``;

export const Component = styled.button<StyledProps>`
  align-items: center;
  border-radius: 0.25rem;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? "0.5625rem 0.75rem 0.5625rem 1rem" : "0.625rem 1rem"};
  text-decoration: none;
  transition: background-color ease 300ms, box-shadow ease 300ms,
    color ease 300ms;
  border: 1px solid transparent;
  &:hover {
    text-decoration: none;
  }
  ${Text} {
    margin-right: ${({ $hasIcon }) => $hasIcon && "0.9375rem"};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  &:focus {
    outline: none;
  }
  ${({ $isBig, $hasIcon }) =>
    $isBig &&
    css`
      line-height: 140%;
      padding: ${$hasIcon
        ? "0.75rem 0.9375rem 0.75rem 1rem"
        : "0.875rem 1rem 0.75rem"};
      ${Text} {
        font-size: 1rem;
      }
    `}
  ${({ $variant }) => {
    switch ($variant) {
      case "secondary":
        return css`
          background: white;
          color: #221f20;
          border: 1px solid #3d4341;
          &:hover:not(:disabled) {
            color: white;
            background: #3d4341;
          }
          &:focus {
            color: white;
            background: #3d4341;
            box-shadow: 0 0 0 0.125rem rgba(61, 67, 65, 0.68);
          }
        `;
      case "link":
        return css`
          color: #3d4341;
          border: 1px solid transparent;
          background: none;
          &:hover:not(:disabled) {
            background: white;
            border-color: #3d4341;
          }
        `;
      case "danger":
        return css`
          color: #ff2c2c;
          border: 1px solid #ff2c2c;
          background: white;
          &:hover:not(:disabled) {
            background: #ff2c2c;
            color: white;
          }
        `;
      default:
      case "main":
        return css`
          background-color: black;
          color: white;
          border-color: black;
          &:hover:not(:disabled) {
            background-color: #221f20;
            border-color: #221f20;
          }
          &:focus {
            background-color: #221f20;
            box-shadow: 0 0 0 0.125rem rgba(34, 31, 32, 0.68);
            border-color: #221f20;
          }
        `;
    }
  }}
`;
