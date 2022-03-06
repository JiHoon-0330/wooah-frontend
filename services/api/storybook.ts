import dataWeverse from "../../data/weverse/dataWeverse";
import { API } from "../../hooks/useCustomQuery";

const getStorybookData = (api: keyof API) => {
  switch (api) {
    case "GET WEVERSE_POST /weverse":
      return dataWeverse;
    default:
      return undefined;
  }
};

export default getStorybookData;
