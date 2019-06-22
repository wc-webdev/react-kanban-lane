import * as React from 'react'
import { styled, withStyle, } from 'styletron-react'
import TextInput from '../../../../components/TextInput/TextInput'

const Fieldset = styled('fieldset', {
  border: '1px solid',
  margin: '0',
  padding: '0 1rem',
})

const ControlWrapper = styled('div', {
  margin: '1rem 0',
})

const FormActionWrapper = withStyle(ControlWrapper, {
  textAlign: 'right',
})

const AddItemForm = ({
  handleSubmit = null,
  handleChange = null,
  handleBlur = null,
  handleFocus = null,
  isValid = false,
  isSubmitting = false,
  values = {},
}) => (
  <form
    onSubmit={handleSubmit}
  >
    <Fieldset
      disabled={isSubmitting}
    >
      <ControlWrapper>
        <TextInput
          name="title"
          label="Title"
          value={values.title}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          autoComplete="off"
        />
      </ControlWrapper>
      <ControlWrapper>
        <TextInput
          name="description"
          label="Description"
          value={values.description}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          multiline
        />
      </ControlWrapper>
      <FormActionWrapper>
        <button
          type="submit"
          disabled={!isValid}
        >
          Add
        </button>
      </FormActionWrapper>
    </Fieldset>
  </form>
)

export default AddItemForm
