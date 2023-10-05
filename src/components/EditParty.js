import { useState, useContext } from "react";
import WaitlistContext from "../context/Waitlist";
import Dropdown from "./Dropdown";

function EditParty({ onSubmit, reference }) {
  const editOptions = [
    { label: "Name", value: "name"},
    { label: "Size", value: "size"},
    { label: "Phone Number", value: "phoneNumber"},
    { label: "Quoted Time", value: "quotedTime"}
  ]

  const [editTerm, setTerm] = useState("");
  const [selection, setSelection] = useState(null);
  const { getValueFrom } = useContext(WaitlistContext);

  const handleFormSubmit = (event) => {
      event.preventDefault();
      if (editTerm) {
        onSubmit(selection.value, editTerm)
      }
  }

  const showCurrentSelectionValue = (selection) => {
    if (selection) {
      return getValueFrom(selection.value, reference.phoneNumber);
    } else {
      return "";
    }
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSelect = (option) => {
    setSelection(option);
    setTerm(showCurrentSelectionValue(option));
  }

  return (
    <div className="mt-5 p-3 bg-gray-100 rounded-2xl">
      <form onSubmit={handleFormSubmit}>
        <Dropdown options={editOptions} value={selection} onChange={handleSelect}></Dropdown>
        <input
          className="input ml-2 pl-2 mr-2"
          value={editTerm}
          onChange={handleChange}
        />
        <button className="button bg-blue-300 p-1 pl-2 pr-2 is-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditParty;
