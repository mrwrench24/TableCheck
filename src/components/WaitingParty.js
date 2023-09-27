import { GoChevronDown } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import EditParty from "./EditParty";
import { useState } from "react";
import { useContext } from "react";
import WaitlistContext from "../context/Waitlist";

function WaitingParty({ reference }) {
  const { deleteParty, editParty } = useContext(WaitlistContext);
  const [showEdit, setShowEdit] = useState(false);
  const iconProperties = "float-right text-2xl cursor-pointer ml-5 mr-5";

  const handleEditButtonClick = () => {
    setShowEdit(!showEdit);
  }

  const handleDelete = () => {
    deleteParty(reference.phoneNumber);
  };

  const handleFormSubmission = (newName) => {
    setShowEdit(!showEdit);

    editParty(reference.phoneNumber, newName)
  };

  let editWindow = null;
  if (showEdit) {
    editWindow = <EditParty onSubmit={handleFormSubmission}/>;
  }

  return (
    <div>
      <div className="box-border bg-purple-300 m-5 p-5">
        <span className="italic font-serif font-bold">{reference.name}</span>, party of {reference.size}
        <GoChevronDown className={iconProperties} />
        <GrEdit className={iconProperties} onClick={handleEditButtonClick}/>
        <TiDeleteOutline className={iconProperties} onClick={handleDelete} />
        {showEdit && editWindow}</div>
    </div>
  );
}

export default WaitingParty;
