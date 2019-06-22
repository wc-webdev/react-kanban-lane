import * as React from 'react'
import { styled, } from 'styletron-react'

const Label = styled('label', {
  display: 'block',
})

const Input = styled('input', props => ({
  display: 'block',
  width: '100%',
  border: '1px solid currentColor',
  maxWidth: '100%',
  minWidth: '100%',
  minHeight: '1.5rem',
  font: 'inherit',
  resize: props.$as === 'textarea' ? 'vertical' : null,
}))

const TextInput = ({
  value: valueProp = '',
  label,
  multiline,
  ...etcProps,
}) => {
  const inputRef = React.useRef(null)
  React.useEffect(() => {
    inputRef.current.value = valueProp
  }, [valueProp])
  return (
    <Label>
      <span>
        {label}
      </span>
      <Input
        {...etcProps}
        $as={multiline ? 'textarea' : 'input'}
        ref={inputRef}
      />
    </Label>
  )
}

export default TextInput
