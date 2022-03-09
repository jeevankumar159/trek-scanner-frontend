import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import AboutUs from './components/Pages/AboutUs';
import Organisers from './components/Pages/Organisers';
import TripList from './components/Trips/TripList';
import AddTrip from './components/AddOrganiser/AddTrip';

function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path='/' element={<TripList></TripList>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/organisers' element={<Organisers />}></Route>
        <Route path='/add-organiser' element={<AddTrip />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
