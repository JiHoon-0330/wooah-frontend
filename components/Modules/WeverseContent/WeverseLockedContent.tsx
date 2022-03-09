import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import useInput from "../../../hooks/useInput";
import customAxios from "../../../services/api/customAxios";
import {
  WeverseArtistId,
  WeverseAttachedVideos,
  WeversePhoto,
} from "../../../types/weverse/weverseType";
import Body from "../../Atoms/Body/Body";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import Message from "../../Atoms/Message/Message";
import styles from "./WeverseLockedContent.module.css";

export type LockedPostDataType = {
  artistId: WeverseArtistId;
  profileNickname: string;
  createdAt: string;
  body: string;
  photos?: WeversePhoto[];
  attachedVideos?: WeverseAttachedVideos[];
};

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

    const [data, error] = await customAxios<LockedPostDataType>({
      url: `/weverse/post/${contentsId}`,
      method: "POST",
      data: {
        lockPassword: value,
      },
    });
    if (data) setData(data);
    if (error?.response?.data) setErrorMessage(error?.response?.data?.data);
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
