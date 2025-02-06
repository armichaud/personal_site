import './globals.css'
import { SchemaMarkup } from './schema_markup'
import { Metadata } from 'next'
import { Viewport } from 'next/dist/lib/metadata/types/extra-types'

// viewport: "height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"
export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  // targetDensityDpi: 'device-dpi',
};

export const metadata: Metadata = {
  title: 'Alexander Rodion Michaud',
  description: 'Software Engineer',
  viewport
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"></link>
        <SchemaMarkup />
      </head>
      <body className="bg-black text-white">
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  )
};
