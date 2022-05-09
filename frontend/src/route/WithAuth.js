import React from 'react';
import { Route } from 'react-router-dom';
import { AdminApi } from '../api/AdminApi';
const WithAuth = ({ Component }) => {

  return function Authenticated ({...props}) {
    alert("hello")
    let {user, pass} = AdminApi.whoami()
   console.log(user, pass);
   
    return <Route path='/adminPanel' element={<Component/>}/>
  }
}

export default WithAuth;
