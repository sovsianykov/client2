import * as React from "react";
import Box from "@material-ui/core/Box";

import styles from "./OrderForm.module.scss";

import FormItem from "./FormItem";
const initialProducts = [
  "яйца",
  "молоко",
  "хлеб",
  "курица",
  "помидоры",
  "огурцы",
  "капуста",
  "бананы",
  "лук",
  "морковь",
  "филе",
  "сметана",
];

export default function OrderForm() {
  const products = initialProducts.map((el, i) => {
    let obj = {};
    obj["name"] = el;
    obj["value"] = "";
    obj["id"] = i;
    return obj;
  });


  return (
    <Box sx={{ minWidth: 120 }} className={styles.formContainer}>
      {products.map((product) => (
        <FormItem
          product={product}
          // onChange={onChangeHandler}
          key={product.id}
        />
      ))}
    </Box>
  );
}
