import { useState } from "react";
import Button from "./Button";

export default function Input({ onAdd }) {
  const [value, setValue] = useState({
    id: 0,
    text: "",
    packed: false,
  });

  function handleChange(data) {
    setValue({ ...value, text: data });
  }

  return (
    <div className="form-input-wrapper">
      <input
        type="text"
        value={value.text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter Your Task ..."
      />
      <div className="add-btn">
        <Button onClick={() => onAdd(value)}>
          <i className="bi bi-plus"></i>
        </Button>
      </div>
    </div>
  );
}
