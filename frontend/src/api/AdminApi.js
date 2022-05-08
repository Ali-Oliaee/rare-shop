import http from "./HttpApi"

const AdminApi = new http("/admin");

AdminApi.setNewProduct =  (body) => {
  return this.instance.post(`${this.baseApisUrl}/NewProduct`, body)
}

AdminApi.getAllProducts =  (body) => {
  return this.instance.get(`${this.baseApisUrl}/NewProduct`, body)
}

AdminApi.login = function (body) {
  return this.instance.post(`${this.baseApisUrl}/login`, body);
};
export { AdminApi }
