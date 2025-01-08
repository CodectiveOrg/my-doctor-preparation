import { ReactElement } from "react";

import { SelectOptionType } from "@/types/select-option.type";

import SelectComponent from "@/components/select/select.component";

import styles from "./floating-select.module.css";

type Props = {
  title: string;
  placeholder?: string;
  options: SelectOptionType[];
  value?: SelectOptionType;
  onChange: (value: SelectOptionType | undefined) => void;
};

export default function FloatingSelectComponent({
  title,
  placeholder,
  options,
  value,
  onChange,
}: Props): ReactElement {
  return (
    <label className={styles.wrapper}>
      <div className={styles.title}>{title}:</div>
      <SelectComponent
        placeholder={placeholder}
        options={options}
        selectedOption={value}
        onChange={onChange}
      />
    </label>
  );
}
