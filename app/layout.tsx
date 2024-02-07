import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js　To-Do-List　ウエブアプリ",
  description: "これは　Next.js　を利用しての　To-Do-List　ウエブアプリケーションです！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body>
        <h1 className="flex p-3 me-3 text-2xl justify-center">To-Do-List　ウエブアプリ</h1>
        <main className="mx-auto w-1/2">
          {children}
        </main>
      </body>
    </html>
  );
}
