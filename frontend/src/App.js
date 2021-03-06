import { React, useState } from "react";
import "./App.css";
import CryptoList from "./pages/components/WidgetList";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Coin from "./pages/Coin";

function App() {
 
  //search bar / filter : 
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/coin/:name" element={<Coin/>}></Route>
          <Route path="/cryptolist" element = {<CryptoList input={inputText} />} />
        </Routes>
      </Router>
    </div> //End of App
  );
}

export default App;