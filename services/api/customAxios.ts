import { AxiosRequestConfig } from "axios";
import apiAxios from "./axios";

const customAxios = async <T>(
  config: AxiosRequestConfig,
): Promise<[T, any]> => {
  try {
    const { data } = await apiAxios(config);
    return [data, undefined];
  } catch (error) {
    console.error(error);
    return [undefined!, error];
  }
};

export default customAxios;
