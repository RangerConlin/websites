import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arcadia Command Solutions",
    template: "%s | Arcadia Command Solutions",
  },
  description: "Field communications, ICS consulting, incident management, and operational software for planned events and complex operations.",
  icons: {
    icon: "/brand-shield-dark.png",
    shortcut: "/brand-shield-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
