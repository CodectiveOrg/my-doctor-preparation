import { ReactElement } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { value: "all", label: "هر زمان" },
  { value: "today", label: "امروز" },
  { value: "tomorrow", label: "تا فردا" },
  { value: "inThreeDays", label: "تا سه روز" },
  { value: "inFiveDays", label: "تا پنج روز" },
  { value: "inSevenDays", label: "تا هفت روز" },
];

export default function AppointmentFilterComponent(): ReactElement {
  return <SelectComponent title="نزدیک‌ترین نوبت" options={options} />;
}
