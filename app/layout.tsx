import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qinwenluo.github.io"),
  title: "Qinwen Luo | Reinforcement Learning Researcher",
  description:
    "Academic homepage of Qinwen Luo — research in offline reinforcement learning, offline-to-online adaptation, and efficient LLM reasoning.",
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
    icon: "/profile.png",
    shortcut: "/profile.png",
  },
  openGraph: {
    title: "Qinwen Luo | Academic Homepage",
    description:
      "Research in reliable reinforcement learning and efficient LLM reasoning.",
    url: "https://qinwenluo.github.io",
    siteName: "Qinwen Luo",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qinwen Luo | Academic Homepage",
    description:
      "Research in reliable reinforcement learning and efficient LLM reasoning.",
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
