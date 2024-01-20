import React, { useState, useEffect } from 'react';
import Home_ from './Home';
import Details_ from './Details';
import Fdetails_ from './Fdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Saved_ from './Saved';
import axios from "axios";

function App() {
  const [productObj, setProductObj] = useState([]);
  const [indexCopy, setIndexCopy] = useState('');
  const [favorites, setFavorites] = useState([]);
  const fetchData = async () => {
    try 
    {
      const response = await axios.get("https://api.themoviedb.org/3/movie/popular",{
        params: {
          api_key: '5b84a49df7e669020260a8dd27b1e317',
        },
      });
      const data_ = response.data;

      setProductObj(data_.results);
      
    } catch (error) 
    {
      console.error("Error Fetching Data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [productObj]);

  const getIndexCopy=(ind)=>{
    setIndexCopy(ind);
  }

  const addToFavorites = () => {
    if (indexCopy !== '') {
      let ind_ = parseInt(indexCopy);
      let n1 = ind_;
      let n2 = n1 + 1;
      let finalArr = productObj.slice(n1, n2);
      setFavorites((prevFavorites) => [...prevFavorites, ...finalArr]);
    }
    alert("Added to favorites");
  };

  const deleteFromFavorites = () => {
    if (indexCopy !== '') {
      let ind_ = parseInt(indexCopy);
  
      setFavorites((prevFavorites) => {
        let updatedFavorites = [...prevFavorites];
        updatedFavorites.splice(ind_, 1);
        return updatedFavorites;
      });
    }
    alert("Removed from favorites");
  };
  

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

 
  
  
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home_  productObj={productObj} getIndexCopy={getIndexCopy} />} /> 
      <Route path="/Details" element={<Details_ indexCopy={indexCopy} productObj={productObj} addToFavorites={addToFavorites} />} />
      <Route path="/Fdetails" element={<Fdetails_ indexCopy={indexCopy} favorites={favorites} deleteFromFavorites={deleteFromFavorites} />} />
      <Route path="/Saved" element={<Saved_  productObj={productObj} favorites={favorites} getIndexCopy={getIndexCopy}/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
