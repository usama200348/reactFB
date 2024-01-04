import FbNews from './Components/FbNews'
import './App.css'

import { useState,useEffect } from "react";

function App() {
 const [fbProducts,setfbProducts]=useState([]) 
 const getdata = () => {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
      setfbProducts(data.products);
      console.log(data.products);
    })
    // .catch((error) => console.error('Error fetching data:', error));
};
  




  useEffect(function(){
    getdata()
  },[])
  
  
if(!fbProducts.length){
  return <div>
    Loading...
  </div>
}

  return (

<div className="App">
      <h1>Facebook News</h1>

{fbProducts.map((post)=>(
   <FbNews key={post.id} post={post} />
))}
      </div>
  )
}

export default App;