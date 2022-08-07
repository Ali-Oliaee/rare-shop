import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Icon } from '@mui/material'
import ProductsApi from '../../../api/Products'

function Delete({ id, onFinish }) {
  // eslint-disable-next-line no-shadow
  const deleteHandler = async (id) => {
    await ProductsApi.delete(id)
    onFinish()
  }
  return (
    <div>
      <Icon onClick={() => deleteHandler(id)}>
        <DeleteIcon />
      </Icon>
    </div>
  )
}

export default Delete
