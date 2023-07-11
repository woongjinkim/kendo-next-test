"use client";
import dynamic from "next/dynamic";
// import FormComponent from "../../components/Form";

const Form = dynamic(() => import("@/components/Form"), { ssr: false });

export default function FormTest() {
  return (
    <>
      <Form />
    </>
  );
}
