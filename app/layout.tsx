import "../styles/globals.css";
import NavBar from "@components/navBar/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
