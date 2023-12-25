import { useEffect, useState } from 'react';
import  Hero  from './Components/Hero';
import axios from 'axios';


function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setData(response.data);
        console.log(response.data); 
      })
      .catch(error => console.log(error));
  }, []);
 



  return (

     <div>
      <h1 className="text-4xl font-bold mb-4">Ürünler</h1>
      <Hero data={data} />
    </div>

  );
};

export default App;
