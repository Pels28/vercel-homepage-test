import type { Metadata } from "next";
import { Lato, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Menu from "@/components/Menu";

export const poppins = Poppins({
  weight: ["300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const montserrat = Montserrat({
  weight: ["300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export const lato = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  preload: true,
});

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [],
  authors: [],
  creator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen overflow-x-hidden">
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${lato.variable} antialiased flex flex-col min-h-full overflow-x-hidden`}
      >
        <Provider>
          <Menu/>
          <main className="flex-grow w-full  overflow-hidden">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
