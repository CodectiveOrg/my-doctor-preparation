"use client";

import {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  const router = useRouter();

  const filtersContext = useContext(FiltersContext);

  const [query, setQuery] = useState<string>("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (filtersContext) {
      if (query) {
        filtersContext.dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        filtersContext.dispatchFilters({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    const filterQuery = filtersContext?.filters.query || "";

    setQuery(filterQuery);

    const href = filterQuery ? `/search/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filtersContext?.filters.query, router]);

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        name="query"
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button type="button">
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
