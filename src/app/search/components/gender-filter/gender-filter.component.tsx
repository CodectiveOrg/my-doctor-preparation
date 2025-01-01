import { ReactElement } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function GenderFilterComponent(): ReactElement {
  return (
    <RadioFilterComponent
      title="جنسیت پزشک"
      name="gender"
      options={[
        { value: "male", label: "آقا" },
        { value: "female", label: "خانم" },
      ]}
    />
  );
}
