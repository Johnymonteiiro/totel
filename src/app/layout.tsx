import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { TotelContextProvider } from "@/context/useContext";
import { Footer } from "@/components/Footer/Footer";
import "../styles/globalStyle.scss";

const roboto = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Totel | Home",
  description: "The better place to sleep",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TotelContextProvider>
          <Header />
          {children}
          <Footer />
        </TotelContextProvider>
      </body>
    </html>
  );
}
