// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Funmathsheet",
  description: "Default description for all pages.",
  keywords: "default, keywords, for, all, pages",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
