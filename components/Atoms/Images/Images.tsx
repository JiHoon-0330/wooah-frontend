import Link from "next/link";
import styles from "./Images.module.css";

interface Props {
  images: {
    src: string;
    origin: string;
  }[];
}

const Images = ({ images }: Props) => {
  if (!images?.length) return null;

  return (
    <div className={styles.images}>
      {images?.map(({ src, origin }) => (
        <Link href={origin}>
          <a target="_blank">
            <img className={styles.image} src={src} alt="" />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Images;
