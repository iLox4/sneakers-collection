import type { Metadata } from "next";
import localFonts from "next/font/local";
import "./globals.css";

const boxingRegular = localFonts({
  src: "../src/ui/fonts/Boxing-Regular.otf",
  variable: "--font-boxing-regular",
});
const excon = localFonts({
  src: [
    {
      path: "../src/ui/fonts/Excon-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../src/ui/fonts/Excon-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/ui/fonts/Excon-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-excon",
});

export const metadata: Metadata = {
  title: "Sneakers collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${boxingRegular.variable} ${excon.variable}`}>{children}</body>
    </html>
  );
}
