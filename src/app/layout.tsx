import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "VisiblePaths",
  description: "VisiblePaths is a platform for your cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-helvetica"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
