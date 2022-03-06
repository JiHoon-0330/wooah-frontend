import Image from "next/image";
import Link from "next/link";
import styles from "./NextImages.module.css";

interface Props {
  images: {
    width: number;
    height: number;
    src: string;
    origin: string;
  }[];
}

const NextImages = ({ images }: Props) => {
  if (!images?.length) {
    return null;
  }
  return (
    <div className={styles.images}>
      {images.map(({ origin, ...props }) => (
        <Link key={origin} href={origin}>
          <a target="_blank">
            <Image
              {...props}
              layout="responsive"
              priority={true}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpg"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NextImages;
