import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Utility/Header/Header";
import Home from "./pages/Home/Home";
import Footer from './components/Utility/Footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
