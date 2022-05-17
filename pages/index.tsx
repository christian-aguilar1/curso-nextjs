import React, { useEffect, useState } from "react";
import Link from "next/link";

import Header from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import Loading from "@components/Loading/Loading";

import styles from "@styles/pages/Home.module.scss";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className={styles.Home}>
      <div className="container">
        <Header />
        <Link href="/">
          <a className={styles.HomeDescription}>¿Debería comer un avo hoy?</a>
        </Link>
        {loading ? <Loading /> : <ProductList productList={productList} />}
      </div>
    </main>
  );
};

export default Home;
