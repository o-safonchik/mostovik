import type { BannerBlock as BannerBlockProps } from '@/payload-types'

import React from 'react'
import RichText from '@/components/news/RichText'

const cn = (...classes: (string | undefined | null | Record<string, boolean>)[]): string => {
  return classes
    .flatMap(c => {
      if (typeof c === 'string') return c
      if (typeof c === 'object' && c !== null) {
        return Object.entries(c)
          .filter(([, value]) => value)
          .map(([key]) => key)
      }
      return []
    })
    .filter(Boolean)
    .join(' ')
}

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded', {
          'border-border bg-card': style === 'info',
          'border-error bg-error/30': style === 'error',
          'border-success bg-success/30': style === 'success',
          'border-warning bg-warning/30': style === 'warning',
        })}
      >
        <RichText data={content} />
      </div>
    </div>
  )
}
