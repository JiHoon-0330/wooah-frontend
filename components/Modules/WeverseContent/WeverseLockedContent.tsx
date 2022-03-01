import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import useInput from "../../../hooks/useInput";
import apiAxios from "../../../services/api/axios";
import Body from "../../Atoms/Body/Body";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import Message from "../../Atoms/Message/Message";
import { LockedPostDataType } from "../WeversePost/WeversePost";
import styles from "./WeverseLockedContent.module.css";

interface Props {
  contentsId: string;
  setData: Dispatch<SetStateAction<LockedPostDataType | undefined>>;
}

const WeverseLockedContent = ({ contentsId, setData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { value, onChange } = useInput();

  const changeHandler = useCallback(onChange, []);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await apiAxios({
        url: `/weverse/post/${contentsId}`,
        method: "POST",
        data: {
          lockPassword: value,
        },
      });
      setData(data);
    } catch (error: any) {
      if (error?.response?.data) {
        setErrorMessage(error?.response?.data);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <Body body="비밀글입니다." />
      <form className={styles.form} onSubmit={submitHandler}>
        <Input value={value} onChange={changeHandler} type="text" autoFocus />
        <Button type="submit" disabled={isLoading}>
          입력
        </Button>
      </form>
      {errorMessage && <Message message={errorMessage} type="error" />}
    </div>
  );
};

export default WeverseLockedContent;
