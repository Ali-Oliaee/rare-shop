import http from "./HttpApi"

const AdminApi = new http("/");

AdminApi.setNewProduct = function (body) {
  return this.instance.post(`${this.baseApisUrl}/newproduct`, body)
}

AdminApi.getCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}categoryId`);
};
AdminApi.getSubCategoryId = function () {
  return this.instance.get(`${this.baseApisUrl}subCategoryId`);
}

AdminApi.whoami = function () {
  return this.instance.get(`${this.baseApisUrl}/whoami`);
};
export { AdminApi }
