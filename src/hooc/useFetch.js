import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {  fetchStart, fetchSuccess} from "../redux/actions";


export const useFetch = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStart())
        dispatch(fetchSuccess())
    },[dispatch])
}
