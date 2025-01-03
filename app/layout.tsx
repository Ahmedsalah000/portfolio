import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Salah | Aboshendy | Personal Portfolio",
  description: "Ahmed Salah (Aboshendy) is a full-stack developer with experience in web development. Portfolio showcasing projects and skills.",
  keywords: ["Aboshendy", "Ahmed Salah", "aboshendy", "ابوشندي", "أبوشندي", "Full Stack Developer", "Web Developer", "Portfolio"],
  openGraph: {
    title: "Ahmed Salah (Aboshendy) - Full Stack Developer",
    description: "Personal portfolio of Ahmed Salah (Aboshendy), showcasing web development projects and skills",
    type: "website",
    locale: "en_US",
    siteName: "Aboshendy Portfolio",
    url: "https://portfolio-g2zi767hs-ahmed-salahs-projects.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aboshendy - Full Stack Developer",
    description: "Personal portfolio of Ahmed Salah (Aboshendy)",
  },
  alternates: {
    canonical: "https://portfolio-g2zi767hs-ahmed-salahs-projects.vercel.app"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
