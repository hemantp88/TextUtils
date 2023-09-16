import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";



function App() {
  const [Mode, setMode] = useState('light'); //wheter dark mode is enabel or not
  const [alert, setalert] = useState(null );//setting alert

  const showAlert=(message,type)=>{
    setalert({msg : message,
              type : type
        })
        setTimeout(()=>
        {
          setalert(null)
        },1500)
  };
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = '#1d1c1c';
      showAlert("Dark Mode is enabled","success");
      document.title = "TextUtils - DarkMode enabled"
    } else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled","success");
      document.title = "TextUtils - LightMode enabled"
    }
  };
  return (
    <>
  
      <Navbar title="TextUtilis" AboutText="About Us" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
 
          <TextForm heading="Enter your text Here" showAlert={showAlert} mode={Mode} />

        
        </div>
     
    </>
  );
}

export default App;
