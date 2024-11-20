import type { Metadata } from "next";
import "../components/fonts.css"
import "./globals.css";
export const metadata: Metadata = {
  title: "Sagamen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body
      >
        {children}
 
      </body>
    </html>
  );
}
