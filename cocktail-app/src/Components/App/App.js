// import logo from './logo.svg';
import { useState } from "react";
import DisplayList from "../DisplayList";
import InputField from "../Input";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function handleData(fetched) {
    setData(fetched);
  }
  
 
  return (
    <div className="App">
      <InputField handleData={handleData} />
      <DisplayList data={data} />
    </div>
  );
}

export default App;
