import React from "react";
import { Footer, Header } from "./_components/organism";
import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <div className='flex flex-row w-full'>
          <div className='container py-4 min-h-screen'>{ children }</div>
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

