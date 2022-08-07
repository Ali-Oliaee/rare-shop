import React from 'react'
import Header from '../Header'

// eslint-disable-next-line react/prop-types
function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default AdminLayout
