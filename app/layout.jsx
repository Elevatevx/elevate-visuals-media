import "./globals.css";

export const metadata = {
  title: "Elevate Visuals Media",
  description: "Luxury photo, video, and drone services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
