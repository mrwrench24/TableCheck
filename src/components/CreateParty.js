import { useState } from "react";
import CreateModal from "./CreateModal";
import Button from "./Button";
import { useContext } from "react";
import WaitlistContext from "../context/Waitlist";

function CreateParty() {
  const [showModal, setShowModal] = useState(false);

  const [nameTerm, setNameTerm] = useState("Jake");
  const [sizeTerm, setSizeTerm] = useState(3);
  const [phoneTerm, setPhoneTerm] = useState("(774)343-4300");
  const [timeTerm, setTimeTerm] = useState("7:30 PM");

  const inputProps = "input ml-2 pl-2 mr-2"
  const { addParty } = useContext(WaitlistContext);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    addParty(nameTerm, sizeTerm, phoneTerm, timeTerm);

    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleNameChange = (event) => {
    setNameTerm(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSizeTerm(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneTerm(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeTerm(event.target.value);
  };

  const actionBar = (
    <div>
      <button className="bg-green-300 p-2" onClick={handleSubmit}>
        Add to Waitlist
      </button>
    </div>
  );

  const modal = (
    <CreateModal onClose={handleClose} actionBar={actionBar}>
      <div className="col-span-5">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            className={inputProps}
            value={nameTerm}
            onChange={handleNameChange}
          />
          <input
            className={inputProps}
            value={sizeTerm}
            onChange={handleSizeChange}
          />
          <input
            className={inputProps}
            value={phoneTerm}
            onChange={handlePhoneChange}
          />
          <input
            className={inputProps}
            value={timeTerm}
            onChange={handleTimeChange}
          />
        </form>
      </div>
    </CreateModal>
  );

  return (
    <div>
      <Button className="bg-green-300 p-2 m-5" onClick={handleClick}>
        Create Party
      </Button>
      {showModal && modal}
    </div>
  );
}

export default CreateParty;
