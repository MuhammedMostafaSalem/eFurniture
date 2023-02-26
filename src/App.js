import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Utility/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
