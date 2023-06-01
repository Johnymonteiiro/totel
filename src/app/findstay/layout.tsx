import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../../styles/globalStyle.scss";

const roboto = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Totel | Find Stay",
  description: "The better place to sleep",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
     {children}
    </>
  );
}
