import React from 'react';
import styles from './Header.module.scss'
import Box from "@material-ui/core/Box";
import headerImg from "./../../assets/header_meal.jpg"
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className={styles.header}>
            <Box className={styles.headerImgContainer}>
               <img src={headerImg} alt='header-img' className={styles.headerImage}/>
            </Box>
            <Navbar />
        </header>
    );
};

export default Header;