import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "University of Waterloo OpenCourseware",
  description: "OpenCourseware platform for the University of Waterloo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-texture`}>
        <header className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#FFD54F]">UWaterloo</span> OpenCourseware
            </Link>
          </div>
        </header>
        <main className="container mx-auto p-4 flex-grow">{children}</main>
        <footer className="bg-black text-white p-4 text-center">
          <p>&copy; 2023 University of Waterloo OpenCourseware</p>
        </footer>
      </body>
    </html>
  )
}

