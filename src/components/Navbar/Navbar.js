import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {
    RestaurantTwoTone
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" color='default' style={{top: "10vh"}} className={styles.navbar} >
                <Toolbar variant="dense">
                    <Button edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Link to = '/' ><RestaurantTwoTone /></Link>
                    </Button>
                    <Link to = 'order' >
                    <Button variant='contained'  color="secondary" aria-label="menu" sx={{ mr: 2 }}>
                         Заказать
                    </Button>
                    </Link>
                        <Link to = 'orders-store' >
                            <Typography variant="h6" color="textPrimary"  className={styles.navbarItem} >
                                Архив
                            </Typography>
                        </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}