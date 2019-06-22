import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Formik, } from 'formik'
import { styled, } from 'styletron-react'
import { Link, } from 'react-router-dom'

const ItemWrapper = styled('article', {
  position: 'relative',
})

const ItemLink = styled(Link, {
  textDecoration: 'none',
  color: 'inherit',
})

const Item = styled('div', {
  border: '1px solid currentColor',
  margin: '1rem 0',
})

const ItemHeader = styled('header', {
  padding: '0 1rem',
  margin: '1rem 0',
})

const ItemTitle = styled('h2', {
  margin: 0,
  fontSize: '1em',
})

const ItemAction = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
})

const ItemList = ({
  items = [],
  itemKey = null,
  itemLink = null,
  deleteItemForm = null,
  onItemDelete = null,
}) => (
  <React.Fragment>
    {
      items.map(item => (
        <ItemWrapper
          key={itemKey(item)}
        >
          <ItemLink
            to={itemLink(item)}
          >
            <Item>
              <ItemHeader>
                <ItemTitle>
                  {item.title}
                </ItemTitle>
              </ItemHeader>
            </Item>
          </ItemLink>
          <ItemAction>
            <Formik
              component={deleteItemForm}
              onSubmit={onItemDelete}
              initialValues={{
                key: itemKey(item),
              }}
            />
          </ItemAction>
        </ItemWrapper>
      ))
    }
  </React.Fragment>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  itemKey: PropTypes.func,
  itemLink: PropTypes.func,
}

export default ItemList
