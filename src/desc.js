import React, { useState, useEffect } from "react";
import {  Link } from 'react-router-dom';

const descStyle={
    width:'100%',
    height:'640px',
    marginLeft:'1%',
    marginRight:'1%',
    marginTop:'0.5%',
    marginBottom:'0.5%',
    backgroundColor:'red',
    color:'black',
    fontStyle:'italic',
    borderRadius:'20px',
    

};

const imgstyle={
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto"

};

const pstyle={
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto"
};

const Descc=(props)=>
{
    const{indexCopy,productObj, addToFavorites}=props;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        rand(productObj);
      }, [productObj]);

    const rand=(products)=>{
    let size = products.length;
    let n1 = indexCopy;
    let n2 = n1 + 1;
    let finalArr = products.slice(n1, n2);
    setProduct(finalArr);

    }
    return(
        <header style={{backgroundColor:'black'}}>
            {product?.map((productt,index) => (
        <div key={productt.id} style={descStyle}>
          <h1 style={pstyle}>
            <b><u>{productt.title}</u></b>
          </h1>
          <br></br>
          <p style={pstyle}>
            <b>Overview: <u>{productt.overview}</u></b>
          </p>
          <br></br>
          <p style={pstyle}><b>Release Date: <u>{productt.release_date}</u></b></p>
          <p style={pstyle}><b>RATING: <u>{productt.vote_average}</u></b></p>
          <img src={`https://image.tmdb.org/t/p/w500/${productt.poster_path}`} alt="hi" style={imgstyle}></img>
          <p style={{ ...pstyle, cursor: 'pointer' }}
                onClick={addToFavorites} > <b><u>Add to favourites</u></b></p>
          </div>
           
          
      ))}
        </header>
    )

};
export default Descc;