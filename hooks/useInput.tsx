import { ChangeEvent, useEffect, useState } from "react";

const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (!defaultValue) return;
    setValue(defaultValue);
  }, [defaultValue]);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
