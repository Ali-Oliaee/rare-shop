import React from 'react';
import { Route } from 'react-router-dom';
import { AdminApi } from '../api/AdminApi';
const WithAuth = ({ Component }) => {

  return function Authenticated ({...props}) {
    let {user, pass} = AdminApi.whoami()
    console.log(user, pass);

    
  }
}

export default WithAuth;
