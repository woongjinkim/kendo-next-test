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
import styles from "./styles.module.css";

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
      <AppBar className={styles.body} themeColor={"inherit"}>
        <AppBarSection>
          <button
            className={styles.button}
            onClick={() => setExpanded(!expanded)}
          >
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <h1 className={styles.title}>TestProject</h1>
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        <AppBarSection>
          <ul className={styles.menu}>
            {menu.map((item, index) => {
              return (
                <li
                  className={styles.list}
                  key={index}
                  onClick={() => router.push(item.url)}
                >
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className={styles.button}>
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
    </>
  );
}
