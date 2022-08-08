import React from 'react'
import UserHeader from '../Header'
import Footer from '../Footer/Footer'
import './style.scss'

function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <UserHeader />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout
