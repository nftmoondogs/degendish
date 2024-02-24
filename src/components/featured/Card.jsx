import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <Link href={`/posts/${item.slug}`}>
        <div>
          {item.img && (
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            {/* The h1 now has responsive font-size */}
            <h1 className={styles.responsiveTitle}>{item.title}</h1>
            {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
            <div className={styles.detail}>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)} -{" "}
              </span>
              <span className={styles.category}>{item.catSlug}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;