import axios from "axios";
import { TOKEN_LOCAL_KEY } from "../core/constants";
import store from "../redux/store";
import { startLoading, endLoading } from "../redux/actions/LoadingAction";
class Service {
   constructor(entity) {
      this.instance = axios.create();
      this.entity = entity;
      // this.dispatch = useDispatch()
      this.baseApisUrl = `http://localhost:8000${this.entity}`;
      this.instance.interceptors.request.use(
         (config) => {
            store.dispatch(startLoading());
            const token = localStorage.getItem("token");
            if (token) {
               config.headers["token"] = token;
            }
            return config;
         },
         function (error) {
            console.log("bye");
         }
      );
      this.instance.interceptors.response.use(
         (res) => {
            console.log(res);
            store.dispatch(endLoading());
            const { status } = res;
            if (status == 401) {
               window.location.pathname = "/auth/login";
            }
            if (status > 401) {
               window.location.pathname = "/404";
            }
            return res;
         },
         (error) => {
            if (error.response.status == 401) {
               window.location.pathname = "/auth/login";
            }
            store.dispatch(endLoading());
            return error.response;
         }
      );

      // this.instance.defaults.timeout = 60000;
      this.instance.defaults.baseURL = process.env.REACT_APP_SUB_API;
   }

   gets = (config) => {
      return this.instance.get(`${this.baseApisUrl}`, config);
   };

   get = (id, config) => {
      return this.instance.get(`${this.baseApisUrl}/${id}`, config);
   };

   post = (body, formdata = false) => {
      if (formdata) {
         body = this.formdata(body);
      }
      return this.instance.post(`${this.baseApisUrl}`, body);
   };

   patch = (id, body, formdata = false) => {
      if (formdata) {
         body = this.formdata(body);
      }
      return this.instance.patch(`${this.baseApisUrl}/${id}`, body);
   };

   delete = (id) => {
      return this.instance.delete(`${this.baseApisUrl}/${id}`);
   };

   formdata = (body) => {
      const fd = new FormData();
      Object.keys(body).forEach((k) => {
         if (body[k] instanceof FileList) {
            [...body[k]].forEach((v) => {
               let value = v;
               if (!(value instanceof File) && typeof value === "object")
                  value = JSON.stringify(value);
               fd.append(k, value);
            });
         }
         if (body[k] instanceof File) {
            fd.append(k, body[k]);
         } else {
            let value = body[k];
            if (!(value instanceof File) && typeof value === "object") {
               value = JSON.stringify(value);
            }
            fd.append(k, value);
         }
      });
      return fd;
   };
}

export default Service;
