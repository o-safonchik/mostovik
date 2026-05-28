import { RichText as PayloadRichText } from "@payloadcms/richtext-lexical/react"

interface Props {
  data: any
}

export default function RichText({ data }: Props) {
  return (
    <PayloadRichText
      data={data}
    />
  )
}