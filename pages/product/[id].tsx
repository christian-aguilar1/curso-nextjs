import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@components/Loading/Loading";
import ProductSummary from "@components/ProductSummary/ProductSummary";

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <main>
      <div className="container">
        {product !== null && product !== undefined ? (
          <ProductSummary product={product as TProduct} />
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};

export default ProductItem;
