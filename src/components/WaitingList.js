import WaitingParty from "./WaitingParty";
import { useContext } from "react";
import WaitlistContext from "../context/Waitlist";

function WaitingList() {
  const { waitlist, deleteParty } = useContext(WaitlistContext)

  const onDelete = (targetNumber) => {
    deleteParty(targetNumber);
  };

  const renderedParties = waitlist.map((party) => {
    return <WaitingParty reference={party} onDelete={onDelete} />;
  });

  return (
    <div className="box-border bg-purple-500 p-5">
      {renderedParties}
    </div>
  );
}

export default WaitingList;
