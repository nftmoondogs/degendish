import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Head from 'next/head';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.desc.replace(/<[^>]+>/g, '').substring(0, 150)} />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.desc.replace(/<[^>]+>/g, '').substring(0, 150)} />
        <meta name="twitter:image" content={data?.img} />
        
        {/* Open Graph data for Facebook and Telegram */}
        <meta property="og:title" content={data?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`http://localhost:3000/posts/${slug}`} />
        <meta property="og:image" content={data?.img} />
        <meta property="og:description" content={data?.desc.replace(/<[^>]+>/g, '').substring(0, 150)} />
        <meta property="og:site_name" content="Your Site Name" />
      </Head>
      <div className={styles.container}>
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
                <span className={styles.username}>{data?.user.name}</span>
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
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
            <div className={styles.comment}>
              <Comments postSlug={slug}/>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
