'use client'
import { useState, type MouseEventHandler, type ReactNode } from 'react'

// Local lightweight Button fallback to avoid missing external import
function Button({
  children,
  className,
  variant,
  onClick,
}: {
  children: ReactNode
  className?: string
  variant?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const variantClass = variant === 'secondary' ? 'bg-gray-100 text-gray-900' : ''
  return (
    <button type="button" className={`${className ?? ''} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  )
}

const CopyIcon = () => (
  <span aria-hidden="true" className="inline-flex">
    📋
  </span>
)

export function CopyButton({ code }: { code: string }) {
  const [text, setText] = useState('Copy')

  function updateCopyStatus() {
    if (text === 'Copy') {
      setText(() => 'Copied!')
      setTimeout(() => {
        setText(() => 'Copy')
      }, 1000)
    }
  }

  return (
    <div className="flex justify-end align-middle">
      <Button
        className="flex gap-1"
        variant={'secondary'}
        onClick={async () => {
          await navigator.clipboard.writeText(code)
          updateCopyStatus()
        }}
      >
        <p>{text}</p>
        <CopyIcon />
      </Button>
    </div>
  )
}
