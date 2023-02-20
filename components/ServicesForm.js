'use client';

import { useRef, useState } from "react";

export default function ServicesForm({ service }) {
  const [inputVal, setInputVal] = useState({
    origin: '',
    destination: '',
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputVal({
      ...inputVal,
      [name]: value
    })
  }
  return (
    <form>
      <input
        name="origin"
        value={inputVal.origin}
        handleChange={handleChange}
      />
    </form>
  )
}
