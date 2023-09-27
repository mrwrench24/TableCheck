import WaitingList from "./components/WaitingList";
import CreateParty from "./components/CreateParty";

function App() {
  return (
    <div className="app mx-auto modal-container grid bg-blue-100">
      <WaitingList />
      <CreateParty />
    </div>
  );
}


export default App;
