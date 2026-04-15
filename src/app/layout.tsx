import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}