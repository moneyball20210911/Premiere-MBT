import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';
// import HorizontalPageProgress from "react-horizontal-page-progress";

import "./styles.css";

export default function Success(){
    const [address, setAddress] = useState('');
    useEffect(() => {    
        const {ethereum} = window;
        if(ethereum && window.sessionStorage.getItem("connect")){
            handleConnect();
        };
      }, []);
      
    const handleConnect =async () =>{
        if(!address){
            const {ethereum} = window
            if (ethereum) {
                const chainId =await window.ethereum.request({ method: 'eth_chainId' });
                if(Number(chainId) == 56){
                    ethereum.request({ method: 'eth_requestAccounts' }).then(accs=>{
                        if (accs && accs.length) {
                            console.log(process.env.REACT_APP_PROXY + `/api/add/user`);
                            axios.post(process.env.REACT_APP_PROXY + `/api/add/user`, { address }).then(res => {
                                if (res && res.status==='ok') {
                                    setAddress(accs[0])
                                    window.sessionStorage.setItem("connect", "1")
                                } else {
                                    alert("failed");
                                }
                            })
                        }
                    })
                }else{
                    alert("please select smart chain network !!!");
                }
            } else {
                alert('🦊 first, install metamask');
            }
        }
      }
    return(
        <div className = "success">
            <Grid container>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
                <Grid item xs={12} sm = {12} md = {10} lg={8}>
                    <div className = "success-header">
                        <img src = "img/film-logo.png" /> 
                        <span className = "logo-text">Premiere</span>
                    </div>
                    <div className = "success-landing">
                        <div className = "congrats">
                            😁<br />
                            CONGRATULATIONS!<br />
                            YOUR REGISTRATION IS COMPLETE <br />
                            <hr style = {{width:"40%", color:"rgba(255, 255, 255, 0.34)"}} />
                        </div>
                        <div>
                            <div className = "step-text">HERE ARE YOUR NEXT STEPS</div>
                            <div className = "flow-bar"></div>
                            <div className = "steps">
                                <div className = "step-title">STEP 1</div><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-1.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">
                                                <a href = "https://metamask.io/download" target = "_blank">Download The Meta Mask Wallet</a>
                                            </div><br />
                                            <div className = "step-sub-comment">
                                                <a href = "https://metamask.io/download" target = "_blank">DOWNLOAD META MASK</a>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-1.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 2</div><br/><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-2.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">Add the BSC Network</div><br />
                                            <div className = "step-sub-comment">
                                                <a href = "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain.amp" target = "_blank">Read more about the BSC Network</a>
                                                <br/><br/>
                                                Network Name:<b> Smart Chain</b><br/>
                                                <a href = "https://bsc-dataseed.binance.org/" target = "_blank">New RPC URL:<b> https://bsc-dataseed.binance.org/</b></a><br/>
                                                ChainID:<b> 56</b><br/>
                                                Symbol:<b> BNB</b><br/>
                                                <a href = "https://bscscan.com" target = "_blank">Block Explorer URL:<b> https://bscscan.com</b></a><br/><br/><br/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-2.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 3</div><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-3.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">Add MoneyBall Token</div><br />
                                            <div className = "step-sub-comment">
                                                Token Address:<b> 0x8d7d20bc3be644eaab3239e3a5aa9158b84912ed</b><br/>
                                                Token Symbol:<b> MBT</b><br/>
                                                Token of precision:<b> 18</b><br/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-3.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "connect-button">
                                {address?(
                                    <button className = "connect1" >🦊 {address.toString()}</button>
                                ):(
                                    <button className = "connect" onClick = {handleConnect}>🦊 Connect Metamask Wallet</button>
                                    )
                                }
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 4</div><br/><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-4.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">
                                                <a href = "https://t.me/MballToken" target = "_blank">Join the Telegram channel to receive updates</a>
                                            </div><br />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <hr style = {{width:"60%", color:"rgba(255, 255, 255, 0.34)"}} /><br/>
                            <div style = {{color:"white", fontFamily:"Arial", fontSize:"16px", textAlign:"center"}}>We do not share or take sensitive/ personal data. Your Public address is safe to share and we will only use it in your favor.</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
            </Grid>
            <div className = "success-footer">
                <div style = {{marginLeft:"20%"}}>© Copyright 2021  - All Rights Reserved</div>
            </div>
        </div>
    );
}