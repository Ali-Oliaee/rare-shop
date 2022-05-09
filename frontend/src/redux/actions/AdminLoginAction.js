import AdminActionTypes from "../types/AdminTypes"

const setUser = (user)=>({
    type: AdminActionTypes.SET_ADMIN,
    payload: user
})

export { setUser }


   