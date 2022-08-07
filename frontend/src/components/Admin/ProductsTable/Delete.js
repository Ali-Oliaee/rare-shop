import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Icon } from '@mui/material'
import Swal from 'sweetalert2'
import ProductsApi from '../../../api/Products'
import 'sweetalert2/src/sweetalert2.scss'

function Delete({ id, onFinish }) {
  const deleteHandler = async () => {
    Swal.fire({
      title: 'مطمئنی؟',
      text: 'نمیتونی برش گردونی هااا!!!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'نه پشیمون شدم',
      confirmButtonColor: '#6d23b6',
      cancelButtonColor: ' #ff5d8f',
      confirmButtonText: 'آره، پاکش کن',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('پاک شد', 'success')
        await ProductsApi.delete(id)
        onFinish()
      }
    })
  }
  return (
    <div>
      <Icon onClick={() => deleteHandler(id)}>
        <DeleteIcon sx={{ color: '#6d23b6' }} />
      </Icon>
    </div>
  )
}

export default Delete
