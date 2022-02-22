import './reset.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import * as Pages from './Pages'
import {Navbar} from './Components/Navbar'


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pages.Home/>} />
        <Route path='/game1' element={<Pages.Game1/>} />
        <Route path='*' element={<Pages.NotFound/>} />
      </Routes>
    </Router>
  );
}
