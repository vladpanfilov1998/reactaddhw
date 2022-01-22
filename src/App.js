import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {
    const [car, setCar] = useState(null);


  return (
    <>
      <Form update={setCar}/>
      <Cars trigger={car} update={{setCar}}/>

    </>
  );
}

export default App;
