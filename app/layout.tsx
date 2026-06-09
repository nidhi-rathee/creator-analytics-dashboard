import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry"; // Next.js alias @/ automatically finds the root components folder

export const metadata: Metadata = {
  title: "Creator Analytics Dashboard",
  description: "Enterprise-grade media analysis application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}