import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SymphonicSlates",
  description: "SymphonicSlates is a platform that creates images of songs through generative AI.",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      {/* `suppressHydrationWarning` only affects the html tag,
      and is needed by `ThemeProvider` which sets the theme
      class attribute on it */}
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
