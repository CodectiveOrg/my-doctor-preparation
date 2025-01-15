import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteStarFill from "@/icons/MingcuteStarFill";

import { doctors } from "@/mock/doctors";

import styles from "./page.module.css";

type Params = { id: string };

type Props = {
  params: Params;
};

export default function Page({ params }: Props): ReactElement {
  const doctor = doctors.find((x) => x.id === params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt="عکس پروفایل دکتر"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.brief}>{doctor.brief}</div>
        <div className={styles.badges}>
          {doctor.badges.map((badge) => (
            <div key={badge} className={styles.badge}>
              {badge}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.address}>
        <MingcuteLocationLine /> آدرس: {doctor.address}
      </div>
      <div className={styles.actions}>
        <div className={styles.rating}>
          <MingcuteStarFill className={styles.icon} />{" "}
          <span className={styles["average-rating"]}>
            {Math.floor(doctor.averageRating * 10) / 10}
          </span>{" "}
          <span className={styles["total-votes"]}>
            ({doctor.totalVotes} نظر)
          </span>
        </div>
        <div className={styles.caption}>
          اولین نوبت: {doctor.firstAvailableAppointment}
        </div>
        <Link href={`/doctor/${doctor.id}`}>نوبت‌دهی آنلاین</Link>
      </div>
    </div>
  );
}
