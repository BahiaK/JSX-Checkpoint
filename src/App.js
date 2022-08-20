import './App.css';
import Profilepicture from "../src/Component/Profile/ProfilePhoto"
import FullName from "../src/Component/Profile/FullName"
import Address from "../src/Component/Profile/Address"

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      
      <FullName />
          <Profilepicture />
          <Address />


      </header>
    </div>
  );
}

export default App;
