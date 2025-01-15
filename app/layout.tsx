import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ARID AGRICULTURE UNIVERSITY",
  description: "Portel for OBE (OUTCOME BASED EDUCATION)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-black bg-white overflow-x-hidden`}
      >
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />  
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
