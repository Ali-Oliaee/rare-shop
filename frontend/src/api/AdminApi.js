import Http from './HttpApi'

const AdminApi = new Http('/')

AdminApi.getCategoryId = () => this.instance.get(`${this.baseApisUrl}category`)
AdminApi.getSubCategoryId = () => this.instance.get(`${this.baseApisUrl}subCategory`)
AdminApi.login = (body) => this.instance.post(`${this.baseApisUrl}auth/login`, body)
AdminApi.upload = (body) => this.instance.post(`${this.baseApisUrl}upload`, body)
AdminApi.update = (id, body) => this.instance.patch(`${this.baseApisUrl}${id}`, body)

export default AdminApi
