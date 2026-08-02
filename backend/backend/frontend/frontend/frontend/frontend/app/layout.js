import "./globals.css";

export const metadata = {
  title: "Haya Building A",
  description: "Modern AI Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
    }
