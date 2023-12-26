import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import SearchResults from './Pages/SearchResults';
import Header from './Components/Header';
import PageContainer from './Containers/PageContainer';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import LoginHeader from './Components/LoginHeader';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleSignOut = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageContainer>
      {isLogin ? (
        <LoginHeader handleSignOut= {handleSignOut} />
      ) : (
        <Header onLogin={handleLogin}/>
      )}
      <Routes>
        <Route path="/" element={<Home data={data} loading={loading} />} />
        <Route path="/detail/:productId" element={<Detail data={data} loading={loading} />} />
        <Route path="/search" element={<SearchResults data={data} loading={loading} />} />
      </Routes>
      <Footer />
    </PageContainer>
  );
}
export default App
