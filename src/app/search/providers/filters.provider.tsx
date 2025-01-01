"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/reducers/filters.reducer";

import { FiltersType } from "@/types/filters.type";
import { DoctorModel } from "@/models/doctor.model";
import { fetchDoctors } from "@/mock/api.mock";

type Value = {
  doctors: DoctorModel[];
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<Value>({
  doctors: [],
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [doctors, setDoctors] = useState<DoctorModel[]>([]);

  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  useEffect(() => {
    fetchDoctors(filters).then(setDoctors);
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ doctors, filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
