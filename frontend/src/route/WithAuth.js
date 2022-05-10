import React from 'react';
import { Route } from 'react-router-dom';
import { AdminApi } from '../api/AdminApi';
const WithAuth = ({ Component }) => {

  return function Authenticated ({...props}) {
    const getAdminData = async() => {
      let adminData = await AdminApi.whoami()
   }
   getAdminData()

  }
}

export default WithAuth;
