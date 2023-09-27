import WaitingList from "./components/WaitingList";
import CreateParty from "./components/CreateParty";

function App() {
  return (
    <div className="app mx-auto modal-container bg-purple-300">
      <span className="p-3">TableCheck</span>
      <WaitingList />
      <CreateParty />
    </div>
  );
}


export default App;
