import { useState, useContext } from "react";
import WaitlistContext from "../../context/Waitlist";
import Dropdown from "../Dropdown";

function EditParty({ onSubmit, reference }) {
  const editOptions = [
    { label: "Name", value: "name" },
    { label: "Size", value: "size" },
    { label: "Phone Number", value: "phoneNumber" },
    { label: "Quoted Time", value: "quotedTime" },
  ];

  const [editTerm, setTerm] = useState("");
  const [selection, setSelection] = useState(null);
  const { getValueFrom } = useContext(WaitlistContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editTerm) {
      onSubmit(selection.value, editTerm);
    }
  };

  const showCurrentSelectionValue = (selection) => {
    if (selection) {
      return getValueFrom(selection.value, reference.phoneNumber);
    } else {
      return "";
    }
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSelect = (option) => {
    setSelection(option);
    setTerm(showCurrentSelectionValue(option));
  };

  return (
    <div className="mt-5 p-3 bg-gray-100 rounded-2xl">
      <form onSubmit={handleFormSubmit}>
        <div className="pt-3">
          <Dropdown
            options={editOptions}
            value={selection}
            onChange={handleSelect}
            useBorder
          ></Dropdown>
        </div>
        <div className="pt-3">
          <input
            className="input ml-2 pl-2 mr-2"
            value={editTerm}
            onChange={handleChange}
          />
        </div>
        <div className="pt-3">
          <button className="button bg-blue-300 pl-3 pr-3 p-2 is-primary rounded-xl">
            <span className="text-2xl">Save</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditParty;
