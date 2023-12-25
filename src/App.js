import { useEffect, useState } from 'react';
import  Hero  from './Components/Hero';
import axios from 'axios';
import Header from './Components/Header';
import Detail from './Pages/Detail';
import { Routes ,Route } from 'react-router-dom';
import Footer from './Components/Footer';



function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);
 



  return (

    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Hero data={data}/>}/>
      <Route path="/detail/:productId" element={<Detail data={data}/>} />
    </Routes>
    <Footer />

  </div>

  );
};

export default App;
