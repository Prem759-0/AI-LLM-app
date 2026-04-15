import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI SaaS App",
  description: "ChatGPT-like AI app"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
