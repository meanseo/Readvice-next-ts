import styles from "@/styles/Layout.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props){
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Header/>
        {children}
      <Footer/>
    </div>
  );
}