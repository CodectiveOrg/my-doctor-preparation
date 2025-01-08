"use client";

import { ReactElement, useState } from "react";

import FloatingSelectComponent from "@/components/floating-select/floating-select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "appointment", label: "نزدیک‌ترین نوبت" },
  { value: "waiting", label: "کمترین زمان معطلی" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>();

  return (
    <FloatingSelectComponent
      title="مرتب‌سازی"
      placeholder="مقداری را مشخص کنید"
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
    />
  );
}
