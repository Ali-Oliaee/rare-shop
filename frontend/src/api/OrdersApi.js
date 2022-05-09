import http from "./HttpApi"

const OrdersApi = new http("/orders");

export { OrdersApi }