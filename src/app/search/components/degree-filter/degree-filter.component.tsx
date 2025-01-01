import { ReactElement } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function DegreeFilterComponent(): ReactElement {
  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="gender"
      options={[
        { value: "Fellowship", label: "فلوشیپ" },
        { value: "Subspecialty", label: "فوق تخصص" },
        { value: "PhD", label: "دکترای تخصصی" },
        { value: "Specialist", label: "متخصص" },
        { value: "Doctorate", label: "دکتری" },
        { value: "Master's Degree", label: "کارشناس ارشد" },
        { value: "Bachelor's Degree", label: "کارشناس" },
      ]}
    />
  );
}
