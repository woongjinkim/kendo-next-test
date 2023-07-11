"use client";
import {
  Dialog,
  DialogActionsBar,
  DialogProps,
} from "@progress/kendo-react-dialogs";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/Button"), { ssr: false });

interface ModalProps extends DialogProps {
  handleClose: () => void;
}

export default function Modal({ handleClose, ...dialogProps }: ModalProps) {
  return (
    <Dialog {...dialogProps}>
      {dialogProps.children}
      <DialogActionsBar>
        <Button themeColor={"error"} fillMode={"outline"} onClick={handleClose}>
          취소
        </Button>
        <Button
          themeColor={"primary"}
          fillMode={"outline"}
          onClick={handleClose}
        >
          확인
        </Button>
      </DialogActionsBar>
    </Dialog>
  );
}
