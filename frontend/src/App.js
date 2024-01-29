import RoomSelection from './Pages/RoomSelection/RoomSelection'
import CreateRoom from './Components/RoomSelection/CreateRoom'
import { DataProvider } from './DataContext';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LandingPage from './LandingPage';

import Rps from './Pages/Game/Rps/Rps'

import './index.css'
import Rpsgame from './Pages/Game/Rps/Rpsgame';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />}  />

          <Route exact path='/rps' element={<Rpsgame />} />
          <Route path='/rps/:room_uuid' element={<Rps />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
