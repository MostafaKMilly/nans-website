import { Open_Sans } from "next/font/google";
import { Header } from "./_components/Header";
import Providers from "./providers";
import { Footer } from "./_components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nans website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={openSans.className}>
        <Providers>
          <Header />
          <div style={{ marginTop: 67 }} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
