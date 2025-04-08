import { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl shadow p-2 border bg-white">{children}</div>
}

export function CardContent({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`card-content ${className}`}>{children}</div>
}
