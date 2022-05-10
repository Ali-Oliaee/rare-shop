import http from "./httpApi"

const UserApi = new http("/user");

UserApi.getProduct = function (id) {
  return this.instance.get(`${this.baseApisUrl}/get-product/${id}`)
}