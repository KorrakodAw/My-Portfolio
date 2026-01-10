import type { Metadata } from "next";
import { Prompt } from "next/font/google"; // Import Prompt font
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Configure the font with subsets for Thai and Latin (English)
const prompt = Prompt({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt", // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Korrakod's Portfolio",
  description: "Full Stack Developer",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    // Add 'scroll-smooth' for nicer navigation clicks
    <html lang={locale} className="scroll-smooth">
      {/* Add the subtle grid pattern to the body background */}
      <body
        className={`${prompt.className} bg-zinc-50 bg-grid-zinc-900/[0.02]`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
