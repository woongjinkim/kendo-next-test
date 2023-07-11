"use client";
import { Button, ButtonProps } from "@progress/kendo-react-buttons";

export default function buttonComponent(buttonProps: ButtonProps) {
  return (
    <Button
      togglable={buttonProps.togglable}
      themeColor={buttonProps.themeColor}
      title={buttonProps.title}
      icon={buttonProps.icon}
      size={buttonProps.size}
      disabled={buttonProps.disabled}
      fillMode={buttonProps.fillMode}
    >
      {buttonProps.children}
    </Button>
  );
}
