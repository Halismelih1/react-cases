import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageContainer from "./containers/PageContainer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Footer from "./components/footer/Footer";


const App : React.FC = () => {
    return (
        <div>
        <PageContainer>
        <Router>
        <Navbar/>
        <hr />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/products/:id" element={<Detail/>}  />
          <Route path="/cart" element={<Cart/>}  />
        </Routes>
        <Footer/>
      </Router>
        </PageContainer>
      
      </div>
    );
}

export default App;
