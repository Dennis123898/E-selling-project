import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/nav/NavigationBar";




const poppins = Poppins({ subsets: ["latin"], weight : ['400' , '700'] });

export const metadata: Metadata = {
  title: "DV-tech",                                 
  description: "Where you can buy amazing technology devices",
};

export default function RootLayout({
  children,                                 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body className={'${poppins.className} text-slate-700'}>
        <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className = "flex-grow">
        {children}</main>
        <Footer />
        </div>
        </body>
     </html>
  );
}
