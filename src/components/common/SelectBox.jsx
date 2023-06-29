import { useState } from "react"
import Button from "./Button"


export default function SelectBox({onFilterUsers}) {
  const [value, setValue] = useState('all');


  function handleChange(state) {
    onFilterUsers(state);
    setValue(state)
  }


  return <div className="selected-wrapper">
    <select value={value} onChange={(e)=>handleChange(e.target.value)}>
      <option value='all'>All</option>
      <option value='complited'>complited</option>
      <option value='uncomplited'>uncomplited</option>
    </select>
    <Button>
    <i className="bi bi-caret-down-fill"></i>
    </Button>
  </div>
}