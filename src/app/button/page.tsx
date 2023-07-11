import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/Button"), { ssr: false });
export default function ButtonTest() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "10px 10px",
        }}
      >
        <Button themeColor={"success"}>ThemeColor success</Button>
        <Button themeColor={"primary"}>Primary</Button>
        <Button themeColor={"dark"}>Dark</Button>
        <Button themeColor={"base"}>Base</Button>
        <Button themeColor={"error"}>Error</Button>
        <Button themeColor={"warning"}>Warning</Button>
        <Button themeColor={"secondary"}>Secondary</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "10px 10px",
        }}
      >
        <Button togglable={true}>Togglable</Button>
        <Button size={"small"}>small</Button>
        <Button size={"medium"}>medium</Button>
        <Button size={"large"}>large</Button>
        <Button fillMode={"outline"}>OutLine</Button>
        <Button fillMode={"flat"}>Flat</Button>
        <Button fillMode={"solid"}>Solid</Button>
        <Button fillMode={"link"} themeColor={"primary"}>
          Link
        </Button>
      </div>
    </div>
  );
}
