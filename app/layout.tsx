import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GradGo",
  description: "Your all-in-one partner for business growth and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bgcol text-txtcol p-0 m-0">
        {children}
        <div id="selector"></div>
      </body>
    </html>
  );
}
