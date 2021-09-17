import React from "react";
import {Grid} from '@material-ui/core';
import Iframe from 'react-iframe'

import "./styles.css";
import logoImg from './assets/logo.svg';



export default function Failed(){
    return(
        <div className = "before-razor">
            <div className = "logo">
                <span className = "logo-img"><img src = {logoImg} width = "10%" /></span>
                <span className = "logo-text">Premiere</span>
            </div>
            <div className = "frame-intro">
                <div>
                    <Grid container>
                        <Grid item xs = {12} sm = {12} md = {1} lg = {1}></Grid>
                        <Grid item xs = {12} sm = {12} md = {4} lg = {4}>
                        <Iframe url="http://moneyballtoken.com/"
                            className = "iframe1"
                            />
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {2} lg = {2}></Grid>
                        <Grid item xs = {12} sm = {12} md = {4} lg = {4}>
                            <div className = "iframe2">
                            <video width="100%" autoPlay >
                                <source src="video/mbt.mp4" type="video/mp4" />
                            </video>
                            </div>
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {1} lg = {1}></Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container>
                        <Grid item xs = {12} sm = {12} md = {2} lg = {1}></Grid>
                        <Grid item xs = {12} sm = {12} md = {3} lg = {4}>
                            <Iframe url="http://cryptodomination101.com/"
                            className = "iframe3"
                            />
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {2} lg = {2}></Grid>
                        <Grid item xs = {12} sm = {12} md = {3} lg = {4}>
                            <div className = "buttons">
                                <button className = "back-button" onClick={()=> window.open("https://www.premiere-mbt.com/", "_self")}>Go to Home</button>
                                <button className = "razor-button">Pay for Registeration</button>
                            </div>                            
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {2} lg = {1}></Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}