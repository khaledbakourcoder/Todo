import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// LAYOUTS
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanke",
  description: "Tanke aufgaben"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
