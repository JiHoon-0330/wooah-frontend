import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export type Menu = "위버스" | "트위터" | "릴스" | "일정";
//  "일정" | "블로그" | "설정";

const Navbar = () => {
  const list: Menu[] = ["위버스", "트위터", "릴스", "일정"];
  //  "일정", "블로그", "설정"];

  const router = useRouter();

  const MATCH: {
    [key in Menu]: string;
  } = {
    위버스: "/",
    트위터: "/twitter",
    릴스: "/reels",
    일정: "/schedule",
    // 블로그: "/blog",
    // 설정: "/setting",
  };

  return (
    <div className={styles.navbar}>
      {list.map((menu) => {
        const path = MATCH[menu];
        return (
          <Link href={path} key={menu} prefetch={false}>
            <a>
              <button
                className={`${path === router.asPath ? styles.selected : ""} ${
                  styles.menu
                }`}
              >
                {menu}
              </button>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
