import React from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pt-40 pb-40">
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
