import React from "react";
import { Paper, Typography } from "@material-ui/core";
import styles from "./Page.module.scss";
import { usePost } from "../hooc/usePost";
const Order = () => {
  const { newMessage, date } = usePost();

  return (
    <section>
      <Paper className={styles.container}>
        <Typography variant="h5" align="center" color="textPrimary">
          Ваш заказ принят <br />
          время {date}
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary">
          {newMessage}
        </Typography>
      </Paper>
    </section>
  );
};

export default Order;
