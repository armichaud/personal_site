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
      <body>
        <div className="flex flex-col justify-center items-start pt-[5vh] dark:bg-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
