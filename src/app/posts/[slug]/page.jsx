// Import necessary modules
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Head from 'next/head';

const SinglePage = ({ data, slug }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data?.title || 'Default Title'}</title>
        <meta property="og:title" content={data?.title || 'Default Title'} />
        <meta property="og:image" content={data?.img?.startsWith('http') ? data.img : `http://solanascoop.com${data?.img}` || 'default-image-url'} />
        <meta property="og:description" content={data?.desc || 'Default description'} />
        <meta property="og:url" content={`http://solanascoop.com/posts/${slug}`} />
      </Head>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        <div
  className={styles.description}
  dangerouslySetInnerHTML={{ __html: data?.desc || '' }} // Correct usage
/>
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  // Assuming getData is defined elsewhere and fetches data based on the slug
  const data = await getData(slug);

  return {
    props: {
      data,
      slug,
    },
  };
}

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export default SinglePage;
