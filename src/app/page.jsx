import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer} style={{ paddingTop: '60px', paddingBottom: '70px' }}>
      <Featured page={page}/>
</div>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}
