import './globals.css'
import { SchemaMarkup } from './schema_markup'

export const metadata = {
  title: 'Alexander Rodion Michaud',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri"></link>
        <SchemaMarkup />
      </head>
      <body className="dark:bg-gray-900">
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
