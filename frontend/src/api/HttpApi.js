/* eslint-disable no-param-reassign */
import axios from 'axios'
import { store } from '../redux/store'
import { startLoading, endLoading } from '../redux/reducers/LoadingSlice'

class Service {
  constructor(entity) {
    this.instance = axios.create()
    this.entity = entity
    this.baseApisUrl = (process.env.BASE_URL ?? 'http://localhost:8000') + this.entity
    this.instance.interceptors.request.use(
      (config) => {
        store.dispatch(startLoading())
        const token = localStorage.getItem('token')
        if (token) config.headers.token = token
        return config
      },
      (error) => Promise.reject(error),
    )
    this.instance.interceptors.response.use(
      (res) => {
        store.dispatch(endLoading())
        const { status } = res
        if (status > 400) window.location.pathname = '/404'
        return res
      },
      (error) => {
        if (error.response.status === 401) {
          console.log(error)
          localStorage.removeItem('token')
          window.location.pathname = '/auth/login'
        }
        store.dispatch(endLoading())
        return error.response
      },
    )
    this.instance.defaults.baseURL = process.env.REACT_APP_SUB_API
  }

  gets = (config) => this.instance.get(`${this.baseApisUrl}`, config)

  get = (id, config) => this.instance.get(`${this.baseApisUrl}/${id}`, config)

  post = (body, formdata = false) => {
    if (formdata) body = this.formdata(body)
    return this.instance.post(`${this.baseApisUrl}`, body)
  }

  patch = (id, body, formdata = false) => {
    if (formdata) body = this.formdata(body)
    return this.instance.patch(`${this.baseApisUrl}/${id}`, body)
  }

  delete = (id) => this.instance.delete(`${this.baseApisUrl}/${id}`)

  // eslint-disable-next-line class-methods-use-this
  formdata = (body) => {
    const fd = new FormData()
    fd.append('image', body)
    return fd
  }
}

export default Service
