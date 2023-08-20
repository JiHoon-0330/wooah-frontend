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
  if (!images?.length) return null;

  return (
    <div className={styles.images}>
      {images.map(({ origin, ...props }) => (
        <Link key={origin} href={origin} target="_blank">
          <Image
            {...props}
            className={styles.image}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${encodeURIComponent(
              props.src,
            )}&w=1&q=15`}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default NextImages;
