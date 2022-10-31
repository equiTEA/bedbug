import { useEffect, useState } from 'react'
import { RichTextEditor, H3, Body1 } from '@bedbug/ui'
import FormHelperText from '@mui/material/FormHelperText'

import type { Descendant } from 'slate'

type Props = {
  error: string | null
  didAttemptSubmit: boolean
  ratingBodyInitialValue: any[]
  onDocumentChange: (document: Descendant[]) => void
}

const RatingBody = ({
  error,
  onDocumentChange,
  didAttemptSubmit,
  ratingBodyInitialValue,
}: Props) => {
  const [document, setDocument] = useState<Descendant[]>(ratingBodyInitialValue)
  useEffect(() => onDocumentChange(document), [document]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <H3 sx={{ mb: 1 }}>Tell us about your rental experience</H3>
      <Body1 sx={{ mb: 3, fontSize: '0.8rem', lineHeight: '1.25rem' }}>
        What would you want future tenants to know about this rental, its
        landlord, or its property manager? Rich text editing is supported.
      </Body1>

      <RichTextEditor
        document={document}
        onDocumentChange={setDocument}
        placeholder="Tell us about your rental experience"
      />

      {error && didAttemptSubmit && (
        <FormHelperText
          error
          sx={{ mt: 1, mb: 3, fontFamily: '"Albert Sans", sans-serif' }}
        >
          {error}
        </FormHelperText>
      )}
    </>
  )
}

export default RatingBody
