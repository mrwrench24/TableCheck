import { createContext, useState } from "react";

const WaitlistContext = createContext();

function Provider({ children }) {
  const [waitlist, setWaitlist] = useState([
    {
      name: "Sam",
      size: 3,
      phoneNumber: 1,
      quotedTime: "7:30 PM",
      key: 1,
    },
    {
      name: "Liane",
      size: 4,
      phoneNumber: 2,
      quotedTime: "8:30 PM",
      key: 2,
    },
  ]);

  const valueToShare = {
    waitlist,
    deleteParty: (targetNumber) => {
      setWaitlist(
        waitlist.filter((party) => party.phoneNumber !== targetNumber)
      );
    },
    editParty: (targetNumber, newName) => {
      setWaitlist(
        waitlist.map((party) => {
          if (party.phoneNumber === targetNumber) {
            console.log(party);
            party.name = newName;
            console.log(party);
            return party;
          } else {
            return party;
          }
        })
      );
    },
    addParty: (name, size, phoneNumber, quotedTime) => {
      setWaitlist(
        [
          ...waitlist,
          {
            name,
            size,
            phoneNumber,
            quotedTime,
            key: Math.random() * 1000
          }
        ]
      )
    }
  };

  return (
    <WaitlistContext.Provider value={valueToShare}>
      {children}
    </WaitlistContext.Provider>
  );
}

export { Provider };
export default WaitlistContext;
