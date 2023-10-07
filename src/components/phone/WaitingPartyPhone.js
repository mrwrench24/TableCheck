import { GoChevronDown } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import EditPartyPhone from "./EditPartyPhone";
import { useState } from "react";
import { useContext } from "react";
import WaitlistContext from "../../context/Waitlist";
import SummaryParty from "../SummaryParty";

function WaitingPartyPhone({ reference }) {
  const { deleteParty, editParty } = useContext(WaitlistContext);
  const [showEdit, setShowEdit] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const iconProperties = "text-3xl cursor-pointer ml-8 mr-5";

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
    editWindow = (
      <EditPartyPhone onSubmit={handleFormSubmission} reference={reference} />
    );
  }

  let summaryWindow = null;
  if (showSummary) {
    summaryWindow = <SummaryParty reference={reference} />;
  }

  return (
    <div>
      <div className="rounded-2xl bg-purple-300 m-5 p-5">
        <span className="italic font-serif font-bold">{reference.name}</span>,
        party of {reference.size}
        <div className="mt-3 flex justify-center">
          <GoChevronDown
            className={iconProperties}
            onClick={handleSummaryClick}
          />
          <GrEdit className={iconProperties} onClick={handleEditButtonClick} />
          <TiDeleteOutline className={iconProperties} onClick={handleDelete} />
        </div>
        {(showEdit && editWindow) || (showSummary && summaryWindow)}
      </div>
    </div>
  );
}

export default WaitingPartyPhone;
