import { useEffect, useRef, useState } from 'react'

export const useAddressFormHeight = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formHeight, setFormHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (formRef?.current?.clientHeight)
        setFormHeight(formRef.current.clientHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [formRef])

  return {
    formRef,
    formHeight,
  }
}
