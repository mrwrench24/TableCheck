const formatPhone = (numToFormat) => {
  const firstThree = parseInt(numToFormat / 10000000);
  const midThree = parseInt((numToFormat / 10000) % 1000);
  const lastFour = parseInt(numToFormat % 10000);

  return "(" + firstThree + ") " + midThree + "-" + lastFour;
}

function SummaryParty({ reference }) {
  return (
    <div className="bg-violet-200 mt-5 p-3 flex-row rounded-2xl">
      <div className="text-2xl text-gray font-semibold">About {reference.name}...</div>
      <div className="space-x-3 pt-1">
        <span>Party Size: {reference.size}</span>
        <span>Phone Number: {formatPhone(reference.phoneNumber)}</span>
        <span>Quoted Time: {reference.quotedTime}</span>
      </div>
    </div>
  );
}

export default SummaryParty;
