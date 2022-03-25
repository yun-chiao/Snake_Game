// containers/SnakeGame/index.js
import React, { Component } from 'react';
import Map from './Map';
export default function SnakeGame () {
    const color = ["red","green", "yellow"];
    const box = {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "100vh",
        margin: "auto",
          backgroundColor:color[0],
          important:"true"
      }
      const countTable = {
        width: "100%",
        height:"100%",
        marginTop: "2%",
        overflow: "auto",
        flex: "1",
        backgroundColor:color[1],
      }
      const map = {
        width: "100%",
        height:"100%",
        marginTop: "2%",
        overflow: "auto",
        flex: "8",
      }

      const stopb = {
        width: "100%",
        height:"100%",
        marginTop: "2%",
        overflow: "auto",
        flex: "1",
        backgroundColor:color[2],
      }
      const operate = {
        width: "100%",
        height:"100%",
        marginTop: "2%",
        overflow: "auto",
        flex: "2",
        backgroundColor:color[2],
      }
       return (
           <div style={box}>
               <div style={countTable}>資訊版 - 顯示計分</div>
               <div style={map}> <Map/> </div>
               <button style={stopb}>暫停按鈕</button>
               <div style={operate} >方向鍵元件</div>
           </div>
       );
}
