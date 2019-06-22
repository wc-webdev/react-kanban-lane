import * as React from 'react'
import { styled, } from 'styletron-react'

const DeleteButton = styled('button', {

})

const DeleteItemForm = ({
  values = {},
  handleSubmit = null,
}) => (
  <form
    onSubmit={handleSubmit}
  >
    <input
      type="hidden"
      name="key"
      value={values.key}
    />
    <DeleteButton
      type="submit"
    >
      Delete
    </DeleteButton>
  </form>
)

export default DeleteItemForm
