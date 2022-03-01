import Header from "./Header";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
