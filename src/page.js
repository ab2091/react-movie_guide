import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideStyle={
    height:'600px',
    marginTop:'0%',
    
};    


const Slidde = () => {
    const images = [
        "http://www.dahoovsplace.com/MovieCollectibles/Posters/MoviePosters/FastFivePoster1.jpg",
        "http://images2.fanpop.com/image/photos/12800000/Inception-Banner-inception-2010-12831726-2000-919.jpg",
        "https://tse3.mm.bing.net/th?id=OIP.8UGEVWbF9oYyh_4nrQOfNwHaDa&pid=Api&P=0&w=300&h=300",
    ];
    

    return (
        <Slide autoplay={true} style={{ width: '100%', overflow: 'hidden', height:'600px' }}>
            <div style={slideStyle}>
                <div style={{ 'backgroundImage': `url(${images[0]})`,height:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                </div>
            </div>
            <div style={slideStyle}>
                <div style={{ 'backgroundImage': `url(${images[1]})`,height:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                </div>
            </div>
            <div style={slideStyle}>
                <div style={{ 'backgroundImage': `url(${images[2]})`,height:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                </div>
            </div>
        </Slide>
    );
};


export default Slidde;
