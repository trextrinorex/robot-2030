import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROBOT 2030 — A Scenario Investigation of Humanoid Machines",
  description:
    "What happens if humanoid robots become economically useful, technically capable, and scalable enough to move from demonstrations into ordinary workplaces, factories, warehouses, and public life by around 2030? An evidence-driven scenario investigation.",
  openGraph: {
    title: "ROBOT 2030",
    description:
      "A scenario investigation into the development and societal impact of humanoid robots through approximately 2030.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-deep)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
