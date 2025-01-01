import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent(): ReactElement {
  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>
        <button type="button">حذف</button>
        <ul className={styles.filters}>{}</ul>
      </div>
    </CardComponent>
  );
}
