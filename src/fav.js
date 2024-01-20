import React from 'react';
import {  Link } from 'react-router-dom';

const boxStyle={
    height:'300px',
    width:'305px',
    backgroundColor:'red',
    color:'black',
    marginRight:'0.5%',
    marginLeft:'0.5%',
    marginTop:'0.5%',
    marginBottom:'0.5%',
    borderRadius:'20px'
    

};

const pstyle = {
    display: 'flex',
    justifyContent:'center',
    color:'black',
    fontSize:'20px',
  };
  
  const pstylee = {
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    fontSize: '15px',
    fontStyle:'italic'
  };
  const imgstyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'150px',
    width:'150px',
    marginLeft:'75px'


  };

  const pst={
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    fontSize: '30px',
    fontStyle:'italic'
  }

  const tstyle={
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'black',
    color: 'red',
    fontSize: '50px',
    fontStyle:'italic',
    marginTop:'0.5%'

  };

const det=(props)=>{
    const { favorites, getIndexCopy } = props;

  return (
    <div>
        <p style={tstyle}><b><u>Favorites</u></b></p>
    
    <div style={{ backgroundColor: 'black',marginTop:'1%' }}>
      {favorites && favorites.length > 0 ? (
        <ul style={{ display: "flex", flexWrap: "wrap", alignContent: "start" }}>
          {favorites.map((product, index) => (
            <li key={product.id} style={boxStyle}>
              <div>
                <div style={pstylee}>
                  <h1 style={pstyle}><Link to="/Fdetails" target="" onClick={() => { getIndexCopy(index) }} style={{ color: 'black' }} > <b>{product.title}</b></Link></h1>
                </div>
                <p style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}><b>Rating: {product.vote_average} </b></p>
                <img src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`} alt="hi" style={imgstyle}></img>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={pst}>NO FAVOURITES ADDED</p>
      )}
    </div>
    </div>
  );


}
export default det;