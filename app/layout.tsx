import Header from './components/Header'
import './global.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Dictionary',
  description: 'Look up any word in the dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
