import WaitingList from "./components/WaitingList";
import CreateParty from "./components/CreateParty";

function App() {
  return (
    <div className="app mx-auto modal-container bg-purple-500 pt-5">
      <span className="p-3 text-3xl text-white font-semibold">TableCheck V1.2</span>
      <WaitingList />
      <CreateParty />
    </div>
  );
}


export default App;
