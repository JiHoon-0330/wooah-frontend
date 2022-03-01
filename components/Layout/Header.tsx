import styles from "./Header.module.css";

type Artist = "나나" | "우연" | "소라" | "루시" | "민서";
const Header = () => {
  const list: Artist[] = ["나나", "우연", "소라", "루시", "민서"];

  const MATCH = {
    나나: "BG_NANA",
    우연: "BG_WOOYEON",
    소라: "BG_SORA",
    루시: "BG_LUCY",
    민서: "BG_MINSEO",
  };

  return (
    <div className={styles.header}>
      {list.map((name) => {
        return <div className={MATCH[name]}>{name}</div>;
      })}
    </div>
  );
};

export default Header;
