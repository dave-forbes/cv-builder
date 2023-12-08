import Forms from "./Forms.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

export default function App() {
  const [cV, setCV] = useState({
    name: "John Doe",
    email: "your.email@example.com",
    address: "1234 Example Street, AB1 2CD",
    phone: "12345678901",
  });

  function handleChange(key, value) {
    const newData = { ...cV, [key]: value };
    setCV(newData);
  }

  return (
    <>
      <Forms handleChange={handleChange} />
      <CV cV={cV} />
    </>
  );
}
