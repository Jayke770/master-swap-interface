import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProvider from '@/components/providers/nextui'
import TonProvider from "@/components/providers/tonconnect";
import Script from 'next/script'
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Master Swap",
  description: "Swap like a master",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} h-[100dvh]`}>
        <NextUIProvider>
          <TonProvider>
            {children}
          </TonProvider>
        </NextUIProvider>
        <Script strategy='beforeInteractive' src='https://telegram.org/js/telegram-web-app.js' />
      </body>
    </html>
  );
}
