// app/layout.jsx
import './globals.css' // make sure this CSS file exists
import Link from 'next/link'

export const metadata = {
  title: 'Todo App',
  description: 'Learning project with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md p-4 mb-6">
          <nav className="max-w-xl mx-auto flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/stats">Stats</Link>
          </nav>
        </header>

        <main className="max-w-xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
