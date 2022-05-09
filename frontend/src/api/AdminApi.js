import http from "./HttpApi"

const AdminApi = new http("/");

AdminApi.setNewProduct = function (body) {
  return this.instance.post(`${this.baseApisUrl}/NewProduct`, body)
}

AdminApi.getAllProducts = function(config) {
  return this.instance.get(`${this.baseApisUrl}/products`, config)
}

AdminApi.login = function (body) {
  return this.instance.post(`${this.baseApisUrl}/login`, body);
};

AdminApi.category = function (body) {
  return this.instance.get(`${this.baseApisUrl}/category`, body);
};
export { AdminApi }
