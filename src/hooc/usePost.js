import { useSelector } from "react-redux";
import axios from "../axios/axios";
import {  format } from 'date-fns'


export const usePost = () =>{
    const order = useSelector(state => state.orderReducer.localOrderList)
    let newMessage = ''
    let date = format(Date.now(),'hh.mm-dd/MM/yyyy')
    order.forEach(e => newMessage += ` ${e.name}  ${e.value} , `)
   try {
        axios.post('/api/message ', {
            username: 'serhii',
            message: newMessage,
            date: date
        }).then(r => {
            console.log(r.data)
        })
        return {newMessage, date}
   } catch (e) {

   }
}