import * as React from 'react';
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Add some SEO here',
  description: 'Add some SEO here',
}
 

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            {children}
          </body>
      </html>
    )
  }