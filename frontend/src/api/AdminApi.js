import http from "./HttpApi"

const AdminApi = new http("/");

AdminApi.setNewProduct = function (body) {
  return this.instance.post(`${this.baseApisUrl}/NewProduct`, body)
}

AdminApi.getAllProducts = function(config) {
  return this.instance.get(`${this.baseApisUrl}/products`, config)
}

AdminApi.category = function (body) {
  return this.instance.get(`${this.baseApisUrl}/category`, body);
};

AdminApi.whoami = function () {
  return this.instance.get(`${this.baseApisUrl}/whoami`);
};
export { AdminApi }
