"use client";
import {
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { useState } from "react";

const items = [
  { text: "Inbox", icon: "k-i-inbox", selected: true },
  { text: "Calendar", icon: "k-i-calendar" },
  { text: "Attachments", icon: "k-i-hyperlink-email" },
  { text: "Favourites", icon: "k-i-star-outline" },
];

interface SiderProp {
  children: React.ReactNode;
  expanded: boolean;
}
export default function Sider({ expanded, children }: SiderProp) {
  const [selectedId, setSelectedId] = useState<number>(
    items.findIndex((x) => x.selected === true)
  );

  const handleSelect = (ev: DrawerSelectEvent) => {
    setSelectedId(ev.itemIndex);
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Drawer
          className=""
          expanded={expanded}
          position="start"
          mode="push"
          items={items.map((item, index) => ({
            ...item,
            selected: index === selectedId,
          }))}
          onSelect={handleSelect}
        >
          <DrawerContent>{children}</DrawerContent>
        </Drawer>
      </div>
      <style>{`
        .k-drawer-container {
            position: fixed;
            width: 100%;
            height: 100%;
        }
    `}</style>
    </>
  );
}
