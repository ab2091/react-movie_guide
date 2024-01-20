import React from 'react';
import Tb from './toolbar';
import Foot from './footer';
import Desc_ from './desc';

function Details(props) {
  return (
    <>
      <div>
        <Tb />
      </div>
      <div>
        <Desc_  indexCopy ={props.indexCopy} productObj={props.productObj} addToFavorites={props.addToFavorites}/>
      </div>
      <div>
        <Foot />
      </div>
     
    </>
  );
}

export default Details;

