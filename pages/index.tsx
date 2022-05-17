import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";

import Header from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import Loading from "@components/Loading/Loading";

import styles from "@styles/pages/Home.module.scss";

const fetchResult = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const urlComplete = dev
    ? "http://localhost:3000/api/avo"
    : "https://curso-nextjs-ashy.vercel.app/api/avo";

  const response = await fetch(urlComplete);
  const { data }: TAPIAvoResponse = await response.json();

  return data;
};

export const getStaticProps: GetStaticProps = async () => {
  const initialResult = await fetchResult();

  return {
    props: {
      initialResult,
    },
  };
};

const Home = ({ initialResult }: { initialResult: TProduct[] }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchResult().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <main className={styles.Home}>
      <div className="container">
        <Header />
        <Link href="/yes-or-no">
          <a className={styles.HomeDescription}>¿Debería comer un avo hoy?</a>
        </Link>
        {loading ? <Loading /> : <ProductList productList={initialResult} />}
      </div>
    </main>
  );
};

export default Home;
