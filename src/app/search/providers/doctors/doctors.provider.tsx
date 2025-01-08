"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { DoctorModel } from "@/models/doctor.model";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

type ContextValue = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

type Props = PropsWithChildren & {
  doctors: DoctorModel[];
};

export default function DoctorsProvider({
  children,
  doctors,
}: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

  const isActive = useCallback(
    (doctor: DoctorModel): boolean => {
      return true;
    },
    [filters],
  );

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isActive));
  }, [isActive, doctors]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}
