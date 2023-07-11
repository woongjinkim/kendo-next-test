"use client";
import { Button, ButtonProps } from "@progress/kendo-react-buttons";

export default function buttonComponent(buttonProps: ButtonProps) {
  return <Button {...buttonProps}>{buttonProps.children}</Button>;
}
