import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: "https://shoppinglist1979.herokuapp.com/"
})

export default instance;
