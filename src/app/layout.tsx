import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import titleIcon from "../public/img/title_icon.svg"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BioWell Pharmaceuticals | Premium Cosmetic Manufacturing",
  description: "BioWell Pharmaceuticals specializes in high-quality cosmetic manufacturing. Discover our innovative skincare and beauty solutions.",
  keywords: "cosmetic manufacturing, BioWell Pharmaceuticals, skincare, beauty products, custom formulations",
  icons: {
    icon: titleIcon.src,
  },
  openGraph: {
    title: "BioWell Pharmaceuticals | Premium Cosmetic Manufacturing",
    description: "BioWell Pharmaceuticals specializes in high-quality cosmetic manufacturing. Discover our innovative skincare and beauty solutions.",
    type: "website",
    url: "https://biowellpharmaceuticals.com",
    images: [
      {
        url: "/images/biowell-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BioWell Pharmaceuticals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioWell Pharmaceuticals | Premium Cosmetic Manufacturing",
    description: "BioWell Pharmaceuticals specializes in high-quality cosmetic manufacturing. Discover our innovative skincare and beauty solutions.",
    images: ["/images/biowell-twitter-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
