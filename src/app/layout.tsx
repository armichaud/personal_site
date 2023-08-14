import './globals.css'

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri"></link>
      </head>
      <body className="dark:bg-gray-900">
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
