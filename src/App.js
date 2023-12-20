import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextArea from "./Component/TextArea";
import Alert from "./Component/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Table from "./Component/Table";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enable or not says state...
  const [alert, setAlert] = useState(null);
  const showAlertFun = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlertFun("Dark Mode Has Been Enabled !", "success !");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertFun("Light Mode Has Been Enabled !", "success !");
    }
  };
  return (
    <div>
    
    <Router>
          
      <Navbar title="TextUtils" TextBox_title="TextBox" Table_title="Table" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
      
      <Route path="/" element={<TextArea showAlertFun={showAlertFun} Heading="Enter Your Text Below : " mode={mode}/>}/>
      <Route path="/table" element={<Table />}/>
      </Routes>
      </div>
          
    </Router>
    </div>
  );
}

export default App;
