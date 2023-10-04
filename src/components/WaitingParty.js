import { GoChevronDown } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import EditParty from "./EditParty";
import { useState } from "react";
import { useContext } from "react";
import WaitlistContext from "../context/Waitlist";
import SummaryParty from "./SummaryParty";

function WaitingParty({ reference }) {
  const { deleteParty, editParty } = useContext(WaitlistContext);
  const [showEdit, setShowEdit] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const iconProperties = "float-right text-2xl cursor-pointer ml-5 mr-5";

  const handleEditButtonClick = () => {
    setShowEdit(!showEdit);
    setShowSummary(false);
  };

  const handleDelete = () => {
    deleteParty(reference.phoneNumber);
  };

  const handleFormSubmission = (categoryToEdit, newTerm) => {
    setShowEdit(!showEdit);

    editParty(categoryToEdit, newTerm, reference.phoneNumber);
  };

  const handleSummaryClick = () => {
    setShowSummary(!showSummary);
    setShowEdit(false);
  };

  let editWindow = null;
  if (showEdit) {
    editWindow = <EditParty onSubmit={handleFormSubmission} reference={reference} />;
  }

  let summaryWindow = null;
  if (showSummary) {
    summaryWindow = <SummaryParty reference={reference} />;
  }

  return (
    <div>
      <div className="box-border bg-purple-300 m-5 p-5">
        <span className="italic font-serif font-bold">{reference.name}</span>,
        party of {reference.size}
        <GoChevronDown
          className={iconProperties}
          onClick={handleSummaryClick}
        />
        <GrEdit className={iconProperties} onClick={handleEditButtonClick} />
        <TiDeleteOutline className={iconProperties} onClick={handleDelete} />
        {(showEdit && editWindow) || (showSummary && summaryWindow)}
      </div>
    </div>
  );
}

export default WaitingParty;
