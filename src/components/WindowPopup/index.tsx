"use client";
import { Window, WindowProps } from "@progress/kendo-react-dialogs";

export default function WindowPopup(windowProps: WindowProps) {
  return <Window {...windowProps}>{windowProps.children}</Window>;
}
