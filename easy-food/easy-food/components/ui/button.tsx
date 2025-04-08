export function Button({ children, onClick, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-blue-600 text-white',
    outline: 'border border-blue-600 text-blue-600',
  }
  return (
    <button onClick={onClick} className={`rounded px-4 py-2 ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
