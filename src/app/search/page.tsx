import { ReactElement } from "react";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <h1>جستجو</h1>
    </div>
  );
}
