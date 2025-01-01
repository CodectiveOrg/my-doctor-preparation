"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { doctors } = useContext(FiltersContext);

  return (
    <div className={styles.stats}>{doctors.length.toLocaleString()} نتیجه</div>
  );
}
