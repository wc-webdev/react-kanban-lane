import * as React from 'react'
import * as PropTypes from 'prop-types'
import { styled, } from 'styletron-react'
import { Formik, } from 'formik'

import ItemList from '../../../../components/ItemList/ItemList'
import AddItemForm from '../AddItemForm/AddItemForm'
import DeleteItemForm from '../DeleteItemForm/DeleteItemForm'

const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
  padding: '0 1rem',
})

const MainView = ({
  loadedItems = [],
  setLoadedItems = null,
}) => {
  const initialValues = {}

  const addItem = (values, formState) => {
    formState.setSubmitting(true)
    const lastId = loadedItems.length > 0 ? Math.max(...loadedItems.map(i => i.id)) : 0
    const newItems = [
      ...loadedItems,
      {
        ...values,
        id: lastId + 1,
      },
    ]

    setLoadedItems(newItems)
    formState.setValues(initialValues)
    formState.setSubmitting(false)
  }

  const deleteItem = values => {
    const confirm = window.confirm('You are going to delete this item.')
    if (confirm) {
      const newItems = loadedItems.filter(i => `${i.id}` !== `${values.key}`)
      setLoadedItems(newItems)
    }
  }

  const isItemValid = values => {
    const errors = {}
    if (!(
      values.title
      && values.title.trim().length > 0
    )) {
      errors.title = 'Title is required.'
    }
    if (!(
      values.description
      && values.description.trim().length > 0
    )) {
      errors.description = 'Description is required.'
    }
    return errors
  }

  return (
    <Container>
      <h1>
        To Do
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={addItem}
        component={AddItemForm}
        validate={isItemValid}
      />
      <ItemList
        items={loadedItems}
        itemKey={item => item.id}
        itemLink={item => `/items/${item.id}`}
        deleteItemForm={DeleteItemForm}
        onItemDelete={deleteItem}
      />
    </Container>
  )
}

MainView.propTypes = {
  setLoadedItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
}

export default MainView
