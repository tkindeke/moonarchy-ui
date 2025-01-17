import type { Metadata } from "next";
import "./../globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Moonarchy - Treasure Tap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-gradient-to-t from-darkAmethyst to-midnightPurple">
        <div className="m-auto flex max-w-xl flex-col items-center">
          <main className="w-full flex-grow">{children}</main>
        </div>
        <footer className="absolute bottom-1 left-1/2 flex -translate-x-1/2 transform items-center justify-center">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
