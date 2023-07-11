"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Window = dynamic(() => import("@/components/WindowPopup"), {
  ssr: false,
});

const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Form = dynamic(() => import("@/components/Form"), { ssr: false });
export default function PopupTest() {
  const [windowVisible, setWindowVisible] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const toggleWindowDialog = () => {
    setWindowVisible(!windowVisible);
  };
  const toggleModalDialog = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <h1>Popup</h1>
      <Button
        fillMode={"outline"}
        themeColor={"primary"}
        onClick={toggleWindowDialog}
      >
        Window Open
      </Button>
      <Button themeColor={"base"} onClick={toggleModalDialog}>
        Modal Open
      </Button>
      {windowVisible && (
        <Window
          title={"Test Window"}
          onClose={toggleWindowDialog}
          initialHeight={700}
          initialWidth={700}
        >
          <Form />
        </Window>
      )}
      {modalVisible && (
        <Modal
          title={"TEST"}
          onClose={toggleModalDialog}
          handleClose={toggleModalDialog}
        >
          this is test modal. Do you want contunue???
        </Modal>
      )}
    </>
  );
}
