import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <Link href={`/posts/${item.slug}`}>
      <div className={styles.container} key={key}>
        {item.img && (
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" layout="fill" objectFit="cover" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.detail}>
            <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
            <span className={styles.category}>{item.catSlug}</span>
          </div>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;