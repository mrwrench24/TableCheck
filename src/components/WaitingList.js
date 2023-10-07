import WaitingParty from "./desktop/WaitingParty";
import WaitingPartyPhone from './phone/WaitingPartyPhone';
import { useContext } from "react";
import WaitlistContext from "../context/Waitlist";
import { useMediaQuery } from 'react-responsive';

function WaitingList() {
  const useDesktop = useMediaQuery({ query: '(min-width: 600px)' });
  const { waitlist, deleteParty } = useContext(WaitlistContext)

  const onDelete = (targetNumber) => {
    deleteParty(targetNumber);
  };

  const renderedParties = waitlist.map((party) => {
    if (useDesktop) {
      return <WaitingParty reference={party} onDelete={onDelete} />;
    } else {
      return <WaitingPartyPhone reference={party} onDelete={onDelete} />;
    }
    
  });

  return (
    <div className="box-border bg-purple-500 p-5">
      {renderedParties}
    </div>
  );
}

export default WaitingList;
