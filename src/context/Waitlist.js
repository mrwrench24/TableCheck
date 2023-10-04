import { createContext, useState } from "react";

const WaitlistContext = createContext();

function Provider({ children }) {
  const [waitlist, setWaitlist] = useState([
    {
      name: "Jake",
      size: 3,
      phoneNumber: 7743434300,
      quotedTime: "7:30 PM",
      key: 1,
    },
  ]);

  const changePartyBySelection = (selection, editTerm, party) => {
    if (selection === "name") {
      party.name = editTerm;
    } else if (selection === "size") {
      party.size = editTerm;
    } else if (selection === "phoneNumber") {
      party.phoneNumber = editTerm;
    } else if (selection === "quotedTime") {
      party.quotedTime = editTerm;
    } else {
      console.log(selection)
      console.log(editTerm)
      console.log(party)
      throw new Error();
    }
  }

  const getValueFrom = (value, party) => {
    if (value === "name") {
      return party.name;
    } else if (value === "size") {
      return party.size;
    } else if (value === "phoneNumber") {
      return party.phoneNumber;
    } else if (value === "quotedTime") {
      return party.quotedTime;
    } else if (value === null) {
      return null;
    } else {
      console.log(value)
      console.log(party)
      throw new Error();
    }
  }

  const valueToShare = {
    waitlist,
    deleteParty: (targetNumber) => {
      setWaitlist(
        waitlist.filter((party) => party.phoneNumber !== targetNumber)
      );
    },
    editParty: (selection, editTerm, targetPhoneNumber) => {
      setWaitlist(
        waitlist.map((party) => {
          if (party.phoneNumber === targetPhoneNumber) {
            changePartyBySelection(selection, editTerm, party)
          }
          
          return party;
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
    },
    getValueFrom: (value, targetNumber) => {
      return waitlist.map( (party) => {
        if (party.phoneNumber === targetNumber) {
          return getValueFrom(value, party);
        }
      })
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
