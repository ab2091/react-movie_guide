import React from 'react';
import Tb from './toolbar';
import Foot from './footer';
import Fdesc_ from './fdesc';

function Details(props) {
  return (
    <>
      <div>
        <Tb />
      </div>
      <div>
        <Fdesc_  indexCopy ={props.indexCopy} favorites={props.favorites} deleteFromFavorites={props.deleteFromFavorites}/>
      </div>
      <div>
        <Foot />
      </div>
     
    </>
  );
}

export default Details;

