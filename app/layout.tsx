import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MouseGlow } from "./components/ui/MouseGlow";

export const metadata: Metadata = {
  title: "Shay Asanova",
  description: "Front end developer",
  icons: { icon: "/logo-icon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col relative isolate">
        <MouseGlow />
        <Navbar />

        <main className="flex-1 w-full">
          <div className="mx-auto max-w-7xl px-5">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
