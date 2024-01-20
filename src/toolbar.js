import React from "react";
import { FaHeart } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import {  Link } from 'react-router-dom';

const barstyle={
    backgroundColor:'black',
    color:'red',
    height:'70px',
    width:'100%',
    marginTop:'0%',
    padding:'10px',
    



};

const iconstyle={
    display:'inline',
    marginRight:'80px',

};
const pstyle={
    display:'inline',
    color:'red',
    marginLeft:'240px',
    fontSize:'50px',
    fontFamily:'Roboto',
    fontStyle:'italic'

};

const tbar=()=>{
    

    return(
        <header style={barstyle}>
            <nav>
                <ul>
                    <li style={iconstyle}><Link to="/"><FaHome style={{ fontSize: '40px', color:'red' }} /></Link></li>
                    <li style={iconstyle}><Link to="/Saved"><FaHeart style={{ fontSize: '40px', color:'red' }} /></Link></li>
                    <p style={pstyle}><b>NETFLIX GUIDE</b></p>
                    

                </ul>
            </nav>

        </header>

        
    )

}

export default tbar;