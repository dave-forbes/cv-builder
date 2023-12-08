import Forms from "./Forms.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

export default function App() {
  const [cV, setCV] = useState({
    name: "John",
    email: "your.email@example.com",
    address: "1234 Example Street, AB1 2CD",
    phone: "12345678901",
  });

  function changeName(e) {
    const newName = { ...cV, name: e.target.value };
    setCV(newName);
  }

  function changeEmail(e) {
    const newEmail = { ...cV, email: e.target.value };
    setCV(newEmail);
  }

  function changeAddress(e) {
    const newAddress = { ...cV, address: e.target.value };
    setCV(newAddress);
  }

  function changePhone(e) {
    const newPhone = { ...cV, phone: e.target.value };
    setCV(newPhone);
  }

  return (
    <>
      <Forms
        changeName={changeName}
        changeEmail={changeEmail}
        changeAddress={changeAddress}
        changePhone={changePhone}
      />
      <CV cV={cV} />
    </>
  );
}
