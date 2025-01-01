import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./radio-filter.module.css";

type Props = {
  title: string;
  name: string;
  options: SelectOptionType[];
};

export default function RadioFilterComponent({
  title,
  name,
  options,
}: Props): ReactElement {
  return (
    <CardComponent>
      <div className={styles["radio-filter"]}>
        <div className={styles.title}>{title}</div>
        {options.map((x) => (
          <label key={x.value}>
            <input type="radio" name={name} value={x.value} />
            {x.label}
          </label>
        ))}
      </div>
    </CardComponent>
  );
}
