import Body from "../../Atoms/Body/Body";
import styles from "./WeverseLockedContent.module.css";

// export type LockedPostDataType = {
//   artistId: WeverseArtistId;
//   profileNickname: string;
//   createdAt: string;
//   body: string;
//   photos?: WeversePhoto[];
//   attachedVideos?: WeverseAttachedVideos[];
// };

interface Props {
  postId: string;
}

const WeverseLockedContent = ({ postId }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Body body="비밀글입니다." />
      {/* <form className={styles.form} onSubmit={submitHandler}>
        <Input value={value} onChange={changeHandler} type="text" autoFocus />
        <Button type="submit" disabled={isLoading}>
          입력
        </Button>
      </form> */}
      {/* {errorMessage && <Message message={errorMessage} type="error" />} */}
    </div>
  );
};

export default WeverseLockedContent;
