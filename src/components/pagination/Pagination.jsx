"use client";

import classNames from 'classnames';
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.button, !hasPrev && styles.disabled)}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev} // Use 'disabled' attribute for clarity 
      >
        <span className={styles.arrow}>&larr;</span> Previous
      </button>

      <button
        className={classNames(styles.button, !hasNext && styles.disabled)}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next <span className={styles.arrow}>&rarr;</span>
      </button>
    </div>
  );
};

export default Pagination;
