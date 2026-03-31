import type { Metadata } from "next";
import "./globals.css";
import "./landing-page.css";

export const metadata: Metadata = {
  title: {
    default: "Bank of America | Online Banking",
    template: "%s | Bank of America Online Banking",
  },
  description:
    "Sign in to your Bank of America online banking account. Secure access to your accounts, pay bills, transfer money, and more.",
  keywords: [
    "bank of america",
    "boa",
    "online banking",
    "bank of america login",
    "boa login",
    "banking",
    "checking account",
    "savings account",
    "credit card",
    "bill pay",
    "secure login",
  ],
  openGraph: {
    type: "website",
    url: "https://www.bankofamerica.com/",
    siteName: "Bank of America | Online Banking",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
          {children}
        </div>
      </body>
    </html>
  );
}
