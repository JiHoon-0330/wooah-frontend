import { Array, ObjectType } from "../../types/global";

const getValidUrl = (
  uri: string,
  query: ObjectType | undefined = undefined,
  valid: Array = [],
): string | null => {
  const defaultResult = {
    uri,
    isValid: true,
    isFirst: true,
  };
  if (!query) {
    return defaultResult.uri;
  }

  const result = Object.keys(query).reduce((result, key) => {
    const value = query[key];
    if (valid.includes(key) && !value) {
      return { ...result, isValid: false };
    }
    const path = `[${key}]`;
    if (uri.includes(`[${key}]`)) {
      return { ...result, uri: uri.replace(path, value) };
    }
    if (value) {
      if (result?.isFirst) {
        return { ...result, isFirst: false, uri: `${uri}?${key}=${value}` };
      }
      return { ...result, uri: `${uri}&${key}=${value}` };
    }
    return result;
  }, defaultResult);

  return result.isValid ? result.uri : null;
};
export default getValidUrl;
