import React, { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import Inventories from 'components/Admin/Inventories/Inventories'
import { Outlet } from 'react-router-dom'
import AllProducts from '../../components/Admin/ProductsTable/index'
import AdminLayout from '../../components/Admin/Layout'
import Orders from '../../components/Admin/Orders/Orders'
import Sidebar from '../../components/Admin/SideBar'

function Adminpanel() {
  const [active, setActive] = useState(false)
  return (
    <>
      <Sidebar />
      {/* <Inventories active={active} />
         <Orders active={active} />
         <AllProducts active={active} />
         <Outlet /> */}
    </>
  )
}

export default Adminpanel
