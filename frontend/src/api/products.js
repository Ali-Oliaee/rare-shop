import http from "./HttpApi"

const ProductApi = new http("/products");

export { ProductApi }