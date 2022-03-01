import axios from "axios";
import { API_DOMAIN } from "../../utils/env";

const apiAxios = axios.create({
  baseURL: API_DOMAIN,
});

export default apiAxios;
