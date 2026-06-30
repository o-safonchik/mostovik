import type { StaticImageData } from 'next/image'

import React from 'react'
import RichText from '@/components/news/RichText'

type ClassValue = string | number | null | undefined | { [className: string]: boolean | undefined | null }

const cn = (...classes: Array<ClassValue>): string => classes
  .flatMap((value) => {
    if (!value) return []
    if (typeof value === 'string' || typeof value === 'number') return [value.toString()]
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className)
  })
  .join(' ')

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

// Local lightweight Media fallback to avoid import resolution issues
type LocalMediaProps = {
  imgClassName?: string
  resource?: any
  src?: StaticImageData | string | null
}

const Media: React.FC<LocalMediaProps> = ({ imgClassName, resource, src }) => {
  const resolvedSrc = src ?? (typeof resource === 'string' ? resource : resource?.url ?? resource?.src)
  const alt = resource?.alt ?? ''

  if (!resolvedSrc) return null

  // If StaticImageData, it can be used as src directly in <img>
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={imgClassName} src={String(resolvedSrc)} alt={alt} />
  )
}

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props


  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      
    </div>
  )
}
