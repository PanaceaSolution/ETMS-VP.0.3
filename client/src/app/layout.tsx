import type { Metadata } from "next";
import { Baumans} from "next/font/google";
import "@/styles/globals.css";

const baumans = Baumans({ subsets: ["latin"] ,weight:"400",style:"normal"});

export const metadata: Metadata = {
  title: "Eventix",
  description: "Ticketing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baumans.className}>{children}</body>
    </html>
  );
}
