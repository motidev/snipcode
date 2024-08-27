export const metadata = {
  title: 'SnipCode | Test your code',
  description: 'Test your code',
}
import '@/styles/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

export default function RootLayout({children}: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className='h-full antialiased bg-top bg-no-repeat bg-zinc-900 bg-degree'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
