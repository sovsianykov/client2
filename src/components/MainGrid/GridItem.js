import React from 'react';
import styles from './MainGrid.module.scss'
import {Grid} from "@material-ui/core";
import OrderCard from "../OrderCard/OrderCard";

const GridItem = ({order}) => {

    return (
        <Grid  item xs={12} md={4} className={styles.mainGridItem} >
            <OrderCard content={order.message} date={order.date}/>
        </Grid>
    );
};

export default GridItem;