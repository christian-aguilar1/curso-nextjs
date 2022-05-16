import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const router = useRouter();
  console.log(router);

  return <div>Esta es la página del producto: {router.query.id}</div>;
};

export default ProductItem;
