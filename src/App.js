import WaitingList from "./components/WaitingList";
import CreateParty from "./components/CreateParty";

function App() {
  return (
    <div className="app mx-auto modal-container bg-purple-500 pt-5">
      <span className="p-3">TableCheck V1.0</span>
      <WaitingList />
      <CreateParty />
    </div>
  );
}


export default App;
