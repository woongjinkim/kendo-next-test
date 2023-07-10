"use client";

import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import useMenu from "@/app/presets/menu";
import { useRouter } from "next/navigation";
import Sider from "./Sider";
import { useState } from "react";

interface LayoutProp {
  children: React.ReactNode;
}

let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";

export default function MainLayout({ children }: LayoutProp) {
  const [expanded, setExpanded] = useState<boolean>(true);
  const router = useRouter();
  const menu = useMenu();
  return (
    <>
      <AppBar>
        <AppBarSection>
          <button
            className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <h1 className="title">TestProject</h1>
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        <AppBarSection>
          <ul>
            {menu.map((item) => {
              return (
                <li onClick={() => router.push(item.url)}>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge themeColor="info" size="small" position="inside" />
            </BadgeContainer>
          </button>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
      <Sider expanded={expanded}>{children}</Sider>
      <style>{`
          body {
              background: #fffefe;
              margin: 0;
              padding: 0;
          }
          .title {
              font-size: 18px;
              margin: 0;
          }
          ul {
              font-size: 14px;
              list-style-type: none;
              padding: 0;
              margin: 0;
              display: flex;
          }
          li {
              margin: 0 10px;
          }
          li:hover {
              cursor: pointer;
              color: #84cef1;
          }
          .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
              padding: 0;
          }
          .k-badge-container {
              margin-right: 8px;
          }
      `}</style>
    </>
  );
}
