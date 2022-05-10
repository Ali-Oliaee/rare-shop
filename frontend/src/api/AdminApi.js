import http from "./httpApi"

const AdminApi = new http("/");

AdminApi.setNewProduct = function (body) {
  return this.instance.post(`${this.baseApisUrl}/newproduct`, body)
}

AdminApi.getCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}category`);
};
AdminApi.getSubCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}subCategory`);
}

AdminApi.whoami = function () {
  return this.instance.get(`${this.baseApisUrl}/whoami`);
};
export { AdminApi }
