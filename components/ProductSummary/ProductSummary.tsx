import React from "react";
import Image from "next/image";
import { Item, Label } from "semantic-ui-react";

import AddToCart from "./AddToCart";
import ProductAttributes from "./ProductAttributes";

type ProductSummaryProps = {
  product: TProduct;
};

const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <>
      <Item.Group as="section">
        <Item style={{ alignItems: "center" }}>
          <Item.Image size="medium">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
            {/* <img src={product.image} alt={product.name} /> */}
          </Item.Image>
          <Item.Content>
            <Item.Header as="h1">{product.name}</Item.Header>
            <Item.Description>
              <p>{product.price}</p>
              <Label>{`SKU: ${product.sku}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddToCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <ProductAttributes {...product.attributes} />
    </>
  );
};

export default ProductSummary;
