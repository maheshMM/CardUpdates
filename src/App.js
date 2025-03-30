import logo from './logo.svg';
import './App.css';
import ManageCards from './Components/ManageCards';
import UpdateCardDetails from './Components/UpdateCardDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ManageCards></ManageCards> */}
       <UpdateCardDetails></UpdateCardDetails>
      </header>
    </div>
  );
}

export default App;
