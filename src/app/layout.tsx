import { ReactElement } from "react";

import type { Metadata } from "next";

import FooterComponent from "@/components/footer/footer.component";
import HeaderComponent from "@/components/header/header.component";
import ToasterComponent from "@/components/toaster/toaster.component";

import "@/styles/typography.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
        <ToasterComponent />
      </body>
    </html>
  );
}
