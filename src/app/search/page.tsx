import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import AppointmentFilterComponent from "@/app/search/components/appointment-filter/appointment-filter.component";
import DegreeFilterComponent from "@/app/search/components/degree-filter/degree-filter.component";
import ExpertiseFilterComponent from "@/app/search/components/expertise-filter/expertise-filter.component";
import FiltersSummaryComponent from "@/app/search/components/filters-summary/filters-summary.component";
import GenderFilterComponent from "@/app/search/components/gender-filter/gender-filter.component";
import ResultsComponent from "@/app/search/components/results/results.component";
import SortComponent from "@/app/search/components/sort/sort.component";

import FiltersProvider from "@/app/search/providers/filters.provider";

import { FiltersType } from "@/types/filters.type";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = await generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <div className={styles.page}>
        <div className={styles.search}>
          <GlobalSearchBoxComponent />
        </div>
        <div className={styles.filters}>
          <FiltersSummaryComponent />
          <ExpertiseFilterComponent />
          <GenderFilterComponent />
          <DegreeFilterComponent />
        </div>
        <div className={styles.toolbar}>
          <SortComponent />
          <AppointmentFilterComponent />
          <div className={styles.stats}></div>
        </div>
        <div className={styles.results}>
          <ResultsComponent />
        </div>
      </div>
    </FiltersProvider>
  );
}

async function generateDefaultFilters(
  searchParams: SearchParams,
): Promise<FiltersType> {
  const { query, expertise, gender, appointment, degree } = await searchParams;

  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise),
    gender: normalizeFilter(gender),
    appointment: normalizeFilter(appointment),
    degree: normalizeFilter(degree),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}