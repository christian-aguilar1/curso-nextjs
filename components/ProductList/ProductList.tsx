import Link from "next/link";
import React from "react";
import { Card } from "semantic-ui-react";

type ProductListProps = {
  productList: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ productList }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(productList)}
  </Card.Group>
);

export default ProductList;
