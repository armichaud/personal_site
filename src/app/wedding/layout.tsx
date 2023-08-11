import favicon from './favicon.ico';

export const metadata = {
    title: "Andrea and Alexander's Wedding",
    description: 'May 23, 2023 in Tuscany, Italy',
}

export default function WeddingLayout({
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
  