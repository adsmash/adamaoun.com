import { Inter } from "next/font/google";
import "./globals.css";
import FloatingFirefliesCanvas from "@/components/main/Background";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Me.png" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-b from-[#000] to-[#4a0e36]  overflow-y-scroll overflow-x-hidden`}
      >
        <FloatingFirefliesCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
