import "./app.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "../pages/About";
import News from "../pages/News";
import Appeals from "../pages/Appeals";
import Suggestions from "../pages/Suggestions";
import Account from "../pages/Account";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/Istok/" element={<About/>} />
            <Route path="/Istok/news" element={<News/>} />
            <Route path="/Istok/appeals" element={<Appeals/>} />
            <Route path="/Istok/suggestions" element={<Suggestions/>} />
            <Route path="/Istok/account" element={<Account/>} />
        </Routes>
    </Router>
  );
}

export default App;
