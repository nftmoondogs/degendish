// First, import necessary components and hooks from Next.js and other libraries
import Head from 'next/head';
import Image from 'next/image';
import Menu from "@/components/Menu/Menu"; // Adjust the path as per your project structure
import Comments from "@/components/comments/Comments"; // Adjust the path as per your project structure
import styles from "./singlePage.module.css"; // Adjust the path as per your project structure

// The SinglePage component now receives the fetched data as a prop
const SinglePage = ({ data }) => {
  const { title, desc, img, user, slug } = data; // Destructure the data for easier access

  // Convert HTML string to plain text for meta description (example method, adjust as needed)
  const metaDescription = desc.replace(/<[^>]+>/g, '').substring(0, 150); // Strip HTML and limit to 150 chars

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={img} />
        {/* Open Graph data for Facebook and Telegram */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`http://solanascoop.com/posts/${slug}`} />
        <meta property="og:image" content={img} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="SolanaScoop" />
      </Head>
      <div className={styles.container}>
        {/* Page content using the data prop */}
        <h1>{title}</h1>
        {/* Render user image, post image, and description as needed */}
        <Comments postSlug={slug} />
        <Menu />
      </div>
    </>
  );
};

// Fetch data server-side with getServerSideProps
export async function getServerSideProps({ params }) {
  // Example fetch function to get post data from an API based on the slug
  const res = await fetch(`http://your-api-endpoint/posts/${params.slug}`);
  const data = await res.json();

  // Return the fetched data as props
  return { props: { data } };
}

export default SinglePage;
