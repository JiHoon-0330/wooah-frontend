import { useCallback, useState } from "react";
import customAxios from "../services/api/customAxios";
import { WeverseContentsType } from "../types/weverse/weverseType";

const useTranslate = (
  defaultValue: string,
  id: number,
  contentsType: WeverseContentsType,
  languageCode: string = "ko",
) => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [translatedValue, setTranslatedValue] = useState("");

  const getTranslatedValue = useCallback(async () => {
    setIsTranslated((prev) => !prev);
    if (translatedValue) return;
    const [data, error] = await customAxios<{
      languageCode: string;
      translation: string;
    }>({
      url: `/weverse/translation`,
      method: "GET",
      params: {
        id,
        contentsType,
        languageCode,
      },
    });
    if (data) setTranslatedValue(data?.translation);
    if (error) alert("번역된 데이터를 가져오지 못했습니다.");
  }, []);

  const data = isTranslated ? translatedValue : defaultValue;

  return {
    translatedValue: data,
    getTranslatedValue,
  };
};

export default useTranslate;
