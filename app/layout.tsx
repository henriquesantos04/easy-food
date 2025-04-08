import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Easy Food',
  description: 'Conectando clientes a cozinheiros e chefs locais.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
