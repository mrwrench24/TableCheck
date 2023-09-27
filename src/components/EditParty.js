import { useState } from "react";

function EditParty({ onSubmit }) {
  const [editTerm, setTerm] = useState("");

  const handleFormSubmit = (event) => {
      event.preventDefault();
      onSubmit(editTerm)
  }

  const handleChange = (event) => {
    
    setTerm(event.target.value);
  };

  return (
    <div className="mt-5 p-3 bg-gray-100">
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
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
