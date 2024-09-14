import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import logo from "public/logo.png";

export default function SplashPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-20 bg-background/80 px-4 backdrop-blur md:px-6">
        <nav className="container hidden w-full justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-4">
            <img src = "/logo.png" alt="SymphonicSlates" className="w-30 h-10" />
            <Link href="/">
              <h1 className="text-base font-semibold text-left">SymphonicSlates</h1>
            </Link>
          </div> 
          <div className="flex items-center gap-4 ml-auto">
            <SplashPageNav />
          </div>
        </nav>
      </header>
      <main className="flex grow flex-col">{children}</main>
      <footer>
        <div className="container py-4 text-xs leading-loose">
          Built with ❤️ at{" "}
          <FooterLink href="https://www.convex.dev/">Hack the North 2024</FooterLink>.
          Powered by Convex,{" "}
          <FooterLink href="https://nextjs.org/">Next.js</FooterLink> and{" "}
          <FooterLink href="https://ui.shadcn.com/">shadcn/ui</FooterLink>.
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 hover:no-underline"
      target="_blank"
    >
      {children}
    </Link>
  );
}

function SplashPageNav() {
  return (
    <>
      <Link
        href="/"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Home
      </Link>
      <Link
        href="/Gallery"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Gallery
      </Link>
      <Link
        href="/About"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        About
      </Link>
      <Link href="/product">
        <Button>Login</Button>
      </Link>
    </>
  );
}
