"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters.provider";

import styles from "./results.module.css";

export default function ResultsComponent(): ReactElement {
  const { doctors } = useContext(FiltersContext);

  return (
    <ul className={styles.results}>
      {doctors.map((doctor) => (
        <li key={doctor.id}>{doctor.name}</li>
      ))}
    </ul>
  );
}
