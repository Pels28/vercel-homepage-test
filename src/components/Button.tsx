"use client";
import { Button as NextButton } from "@heroui/react";
import { JSX, ReactElement, ReactNode } from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  radius?: "full" | "lg" | "md" | "sm" | "none";
  color?: "default" | "primary" | "secondary" | "success";
  isIconOnly?: boolean;
  children?: ReactNode | ReactElement | JSX.Element;
  isLoading?: boolean;
  fullWidth?: boolean;
  onPress?: (e: unknown) => void;
  type?: "submit" | "reset" | "button"
  variant?: "solid" | "faded" | "bordered" | "light" | "flat" | "ghost"
  className?: string
  startContent?: ReactNode | ReactElement | JSX.Element;
  endContent?: ReactNode | ReactElement | JSX.Element;
}

export default function Button({
  size,
  isDisabled,
  radius,
  color = "primary",
  isIconOnly,
  isLoading,
  fullWidth,
  onPress,
  children,
  type,
  variant = "solid",
  className,
  startContent,
  endContent
}: ButtonProps) {
  return (
    <NextButton
      color={color}
      startContent={startContent}
      endContent={endContent}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      size={size}
      fullWidth={fullWidth}
      onPress={onPress}
      className={className}
      radius={radius}
      type={type}
      variant={variant}
    >
      {children}
    </NextButton>
  );
}
