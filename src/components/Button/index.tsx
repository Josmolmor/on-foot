import React from "react";
import Link from "next/link";
import { Component, Text } from "./styles";
import { Props } from "./types";

const Button = ({
  children,
  variant,
  icon,
  className,
  href,
  onClick,
  disabled,
  type,
  target,
  isBig,
}: Props) => {
  return href ? (
    <Link href={href} passHref>
      <Component
        as="a"
        $variant={variant}
        $hasIcon={!!icon}
        className={className}
        target={target}
        $isBig={isBig}
        disabled={disabled}
      >
        {children && <Text>{children}</Text>}
        {icon}
      </Component>
    </Link>
  ) : (
    <Component
      as="button"
      onClick={onClick}
      $variant={variant}
      $hasIcon={!!icon}
      className={className}
      disabled={disabled}
      type={type ?? "button"}
      $isBig={isBig}
    >
      {children && <Text>{children}</Text>}
      {icon}
    </Component>
  );
};

export default Button;
