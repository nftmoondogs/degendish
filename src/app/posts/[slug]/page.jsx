"use client";

import { useEffect, useState } from "react";
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

const SinglePage = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(slug);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) {
    return null; // or render a loading state
  }

  return (
    <div className={styles.container}> 
      <Head>
        <title>{data?.title}</title>

        {/* Open Graph */}
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.desc.substring(0, 150)} /> 
        <meta property="og:image" content={data?.img} />
        <meta property="og:url" content={`https://solanascoop.com/post/${slug}`} /> 
        <meta property="og:type" content="article" /> 

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.desc.substring(0, 150)} />
        <meta name="twitter:image" content={data?.img} />
      </Head>

      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <span className={styles.username}>{data?.user.name}</span>
          <span className={styles.date}>01.01.2024</span>
        </div>
      </div>
      {data?.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
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
  );
};

export default SinglePage;
