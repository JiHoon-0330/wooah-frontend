import { worker } from "./browser";

const useWorker = (restApi: Parameters<typeof worker.use>[0]) => {
  worker.use(restApi);
};
export default useWorker;
