import Forms from "./Forms.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <Forms changeName={changeName} />
      <CV name={name} />
    </>
  );
}
