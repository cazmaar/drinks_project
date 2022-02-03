// import logo from './logo.svg';
import { useState } from "react";
import DrinkModal from "../Modal";
import DisplayList from "../DisplayList";
import InputField from "../Input";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0)


  function handleData(fetched) {
    setData(fetched);
  }

  function showModal(mode, key) {
    setModal(mode);
    setId(key)
  }

  return (
    <div className="App">
      <InputField handleData={handleData} />
      <DisplayList data={data} showModal={showModal} />
      <DrinkModal modal={modal} showModal={showModal} data={data} id={id}/>
    </div>
  );
}

export default App;
