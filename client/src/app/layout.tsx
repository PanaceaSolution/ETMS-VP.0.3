import type { Metadata } from "next";
import { Baumans, Inter } from "next/font/google";
import "@/styles/globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import Header from "@/components/features/shared/Header";
import QueryWrapper from "@/lib/query/QueryWrapper";

const baumans = Baumans({ subsets: ["latin"], weight: "400", style: "normal" });

export const metadata: Metadata = {
  title: "Eventix",
  description: "Ticketing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baumans.className}`}>
        <ReduxProvider>
        <QueryWrapper>
          <Header/>
          {children}
        </QueryWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
