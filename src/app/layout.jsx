import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Matrakosala Digdaya",
  description:
    "General Contractor - PT. Matrakosala Digdaya bergerak di bidang konstruksi, rumah tinggal, Rusun, gedung, dll.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "jasa kontruksi",
    "matrakosala",
    "matrakosala digdaya",
    "jasa kontraktor",
    "jual bataringan",
    "bataringan",
    "kontraktor bangunan",
    "kontraktor rumah",
    "kontraktor gedung",
    "kontraktor rusun",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} lg:max-w-3xl mx-auto`}>
        <main>
          <Navbar />
        </main>
        {children}
      </body>
    </html>
  );
}
