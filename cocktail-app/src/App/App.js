// import logo from './logo.svg';

import { useState } from "react";
import DisplayList from "../Components/DisplayList";
import InputField from "../Components/Input";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // function handleData(fetched) {
  //   setData(fetched);
  // }

  return (
    <div className="App">
      <InputField handle="kk" />
      <DisplayList data="mm" />
    </div>
  );
}

export default App;
