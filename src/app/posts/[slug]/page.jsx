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
    <div className={styles.container}>
      <Head>
        <title>{data?.title}</title>
        {/* Add meta tags for SEO if needed */}
      </Head>

      <main className={styles.mainContent}>
        <article className={styles.post}>
          <header className={styles.postHeader}> 
            <h1>{data?.title}</h1> 
          </header>

          <div className={styles.postContent}> 
            {data?.img && (
              <figure className={styles.imageContainer}>
                <Image
                  src={data.img}
                  alt={data?.title}
                  layout="responsive"
                  width={700}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 700px"
                  loading="eager"
                />
              </figure>
            )}

            <div className={styles.user} style={{ marginTop: '15px' }}> 
              {data?.user?.image && (
                <figure className={styles.userImageContainer}>
                  <Image
                    src={data.user.image}
                    alt={data?.user?.name}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                  />
                </figure>
              )}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.user?.name}</span>
                <span className={styles.date}>01.01.2024</span>
              </div>
            </div>  
          </div>

          <section 
            className={styles.description} 
            style={{ marginTop: '30px' }} 
            dangerouslySetInnerHTML={{ __html: data?.desc || '' }}
          />

          <div className={styles.comment} style={{ marginTop: '30px' }}> 
            <Comments postSlug={slug} />
          </div>
        </article>

        <aside className={styles.sidebar}>
          <Menu />
        </aside>
      </main>
    </div>
  );
};

export default SinglePage;