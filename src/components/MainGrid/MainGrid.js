import React from 'react';
import styles from './MainGrid.module.scss'
import {Grid} from "@material-ui/core";
// import {orderList} from "../../mock/mock";
import GridItem from "./GridItem";
import Box from "@material-ui/core/Box";

const MainGrid = ({orders}) => {
    console.log(orders)
    return (
     <Box>
         <Grid container spacing={0} className={styles.mainGrid}>
             {orders.map(order => ( <GridItem order={order} key={order._id} />))}
         </Grid>
     </Box>
    )
};

export default MainGrid;