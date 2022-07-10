import http from "./HttpApi"

const AdminApi = new http("/");

AdminApi.getCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}category`);
};

AdminApi.getSubCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}subCategory`);
}

AdminApi.login = function (body) {
  return this.instance.post(`${this.baseApisUrl}auth/login`, body);
};

AdminApi.upload = function (body) {
  return this.instance.post(`${this.baseApisUrl}upload`, body);
};
AdminApi.update = function (id, body) {
  return this.instance.patch(`${this.baseApisUrl}${id}`, body);
};
export { AdminApi }
