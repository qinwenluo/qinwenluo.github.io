import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qinwenluo.github.io"),
  title: "Qinwen Luo | Ph.D. Student",
  description:
    "Academic homepage of Qinwen Luo, a Ph.D. student at NUAA researching reinforcement learning, large models, and embodied intelligence.",
  authors: [{ name: "Qinwen Luo", url: "https://qinwenluo.github.io" }],
  keywords: [
    "Qinwen Luo",
    "offline reinforcement learning",
    "offline-to-online RL",
    "LLM reasoning",
    "machine learning",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
  },
  openGraph: {
    title: "Qinwen Luo | Academic Homepage",
    description:
      "Research in reinforcement learning, large models, and embodied intelligence.",
    url: "https://qinwenluo.github.io",
    siteName: "Qinwen Luo",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qinwen Luo | Academic Homepage",
    description:
      "Research in reinforcement learning, large models, and embodied intelligence.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
