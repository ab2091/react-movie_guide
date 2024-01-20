import React from 'react';
import Tb from './toolbar';
import Det from './det';
import Page from './page';
import Foot from './footer';

function Home(props) {
  return (
    <>
      <div>
        <Tb />
      </div>
      <div>
        <Page />
      </div>
      <div>
        <Det productObj={props.productObj} getIndexCopy={props.getIndexCopy}/>
      </div>
      <div>
        <Foot />
      </div>
     
    </>
  );
}

export default Home;

