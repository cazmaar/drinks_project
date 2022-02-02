// import logo from './logo.svg';
import { useState } from "react";
import DrinkModal from "../../Modal";
import DisplayList from "../DisplayList";
import InputField from "../Input";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  function handleData(fetched) {
    setData(fetched);
  }

  function showModal(mode) {
    setModal(mode);
  }

  return (
    <div className="App">
      <InputField handleData={handleData} />
      <DisplayList data={data} showModal={showModal} />
      <DrinkModal modal={modal} showModal={showModal} />
    </div>
  );
}

export default App;
