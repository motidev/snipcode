export const metadata = {
  title: 'SnipCode - Test your code',
  description: 'Test your code',
}
import '@/styles/globals.css'
import Footer from './components/Footer'

export default function RootLayout({children}: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
