import React, {memo, useCallback, useEffect, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import styles from "./OrderForm.module.scss";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {addProduct} from "../../redux/actions";
import {useDispatch} from "react-redux";


const FormItem = ({product}) => {
    const dispatch =useDispatch()

     const [ currentProduct, setCurrentProduct] = useState(product)
    const onChangeHandler = useCallback((e) =>{
        setCurrentProduct({...currentProduct,value: e.target.value})
        dispatch(addProduct(currentProduct))
    },[dispatch,currentProduct])

    useEffect(() =>{
        dispatch(addProduct(currentProduct))
    },[currentProduct,dispatch])


    return (
        <>
            <FormControl fullWidth className={styles.formItem}>
                <InputLabel id ={currentProduct.name} className={styles.inputForm} >{currentProduct.name.toUpperCase()}</InputLabel>
                <Select
                    labelId={currentProduct.name}
                    id={currentProduct.name}
                    value={currentProduct.value}
                    label={currentProduct.name.toUpperCase()}
                    name={currentProduct.name}
                    onChange={onChangeHandler}
                >
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='1десяток'>1 десяток</MenuItem>
                    <MenuItem value="1шт">1шт</MenuItem>
                    <MenuItem value="1кг">1кг</MenuItem>
                    <MenuItem value="2кг">2кг</MenuItem>
                    <MenuItem value="3кг">3кг</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value="200г">200г</MenuItem>
                    <MenuItem value="500г">500г</MenuItem>
                    <MenuItem value="2кг">2кг</MenuItem>
                </Select>
            </FormControl>

        </>
    );
};

export default memo(FormItem);