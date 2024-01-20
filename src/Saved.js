import React from 'react';
import Tb from './toolbar';
import Foot from './footer';
import Fav from './fav';

function Details(props) {
  return (
    <>
      <div>
        <Tb />
      </div>
      <div>
        <Fav favorites={props.favorites} getIndexCopy={props.getIndexCopy}/>

      </div>
      <div>
        <Foot />
      </div>
     
    </>
  );
}

export default Details;

