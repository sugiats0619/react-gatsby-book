import React from "react";

import Header from "./header";
import "minireset.css";
import "fontsource-fira-sans/700-italic.css";
import styles from "./layout.module.css";
import SideSection from "./SideSection";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Gatsby Blog`} />
      <div className={styles.container}>
        <main className={styles.mainPane}>{children}</main>
        <aside className={styles.sidePane}>
          <SideSection title="Profile">
            <div className={styles.profileText}>
              都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
              新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
            </div>
          </SideSection>
        </aside>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;