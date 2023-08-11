import './globals.css'
import ThemeToggle from './theme_toggle'

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
        <div className="min-h-screen flex flex-col justify-center items-center dark:bg-gray-900">
          <ThemeToggle />
          {children}
        </div>
      </body>
    </html>
  )
}
