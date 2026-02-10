import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hero's Journey - Gamified Health App for Children in Cancer Treatment",
  description:
    "Transform chemotherapy into an empowering hero\'s quest. Hero\'s Journey uses ethical gamification with virtual pet companions, family support, and progress tracking to improve treatment adherence in children.",
  generator: 'v0.app',
  keywords:
    'health gamification, pediatric oncology, cancer treatment, adherence, children, mobile app',
  openGraph: {
    title: "Hero's Journey - Gamified Health App",
    description: 'An ethical gaming experience for children in long-term cancer treatment',
    images: [
      {
        url: '/screen-1-home.jpg',
        width: 400,
        height: 800,
        alt: 'Hero\'s Journey Home Screen',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
