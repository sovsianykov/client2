import React from 'react';
import MainGrid from "../components/MainGrid/MainGrid";
import {useFetch} from "../hooc/useFetch";
import {useSelector} from "react-redux";



const OrdersStore = () => {
    useFetch()
    const { ordersList, isLoading, error }  = useSelector(state => state.orderReducer)
    if (isLoading) {
        return <h1>Loading ... </h1>
    }
    if (error) {
        return <h1>ups! something vent wrong !  ... </h1>
    }
    return (
        <main >
            <MainGrid orders={ordersList}/>
        </main>
    );
};

export default OrdersStore;