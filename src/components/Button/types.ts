import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type Variants = "main" | "secondary" | "link" | "danger";

export type BaseProps = {
  variant?: Variants;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  type?: string;
  target?: string;
  isBig?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps;

export type Props = ButtonProps & LinkProps;

export type StyledProps = {
  $variant: BaseProps["variant"];
  $hasIcon: boolean;
  disabled: BaseProps["disabled"];
  $isBig: BaseProps["isBig"];
};
