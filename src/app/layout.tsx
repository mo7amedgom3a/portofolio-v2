import { GridBackground } from "@/components/landing/GridBackground";
import { ThemeProvider } from "@/components/landing/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
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
  title: "Mohamed Gomaa - Backend & Cloud Engineer",
  description:
    "Personal portfolio of Mohamed Gomaa - A Backend & Cloud Engineer specializing in cloud-native platforms, infrastructure automation, and developer tools.",
  keywords: [
    "Backend Engineer",
    "Cloud Engineer",
    "AWS",
    "DevOps",
    "Terraform",
    "Serverless",
    "Infrastructure as Code",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Gomaa" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mohamed Gomaa - Backend & Cloud Engineer",
    description:
      "Personal portfolio showcasing cloud-native platforms, infrastructure automation, and scalable backend systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Gomaa - Backend & Cloud Engineer",
    description:
      "Personal portfolio showcasing cloud-native platforms, infrastructure automation, and scalable backend systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GridBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
