import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import signUpImage from "@/assets/images/sign-up.webp";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";

import MingcuteIncognitoModeLine from "@/icons/MingcuteIncognitoModeLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";
import MingcuteMailLine from "@/icons/MingcuteMailLine";
import MingcuteKey2Line from "@/icons/MingcuteKey2Line";
import MingcuteEye2Line from "@/icons/MingcuteEye2Line";

import styles from "./sign-up-form.module.css";
import PasswordInputComponent from "@/components/password-input/password-input.component";

export default function SignUpFormComponent(): ReactElement {
  return (
    <div className={styles["sign-up-form"]}>
      <CardComponent>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <h1>خوش آمدید!</h1>
            <form>
              <NormalInputComponent
                label="نام و نام خانوادگی"
                type="text"
                prefixIcon={<MingcuteIncognitoModeLine />}
              />
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                prefixIcon={<MingcuteUser3Line />}
              />
              <NormalInputComponent
                label="ایمیل"
                type="email"
                prefixIcon={<MingcuteMailLine />}
              />
              <PasswordInputComponent label="رمز عبور" />
              <ButtonComponent variant="primary">ثبت‌نام</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام کردید؟
              {` `}
              <Link href="/auth/sign-in">وارد شوید</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signUpImage} alt="" />
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
