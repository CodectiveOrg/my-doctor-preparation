import { ReactElement } from "react";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./select.module.css";

type Props = {
  title: string;
  options: SelectOptionType[];
};

export default function SelectComponent({
  title,
  options,
}: Props): ReactElement {
  return (
    <label className={styles.wrapper}>
      <div className={styles.title}>{title}:</div>
      <select>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>
    </label>
  );
}
