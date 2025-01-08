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
            <Route path="/" element={<About/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/appeals" element={<Appeals/>} />
            <Route path="/suggestions" element={<Suggestions/>} />
            <Route path="/account" element={<Account/>} />
        </Routes>
    </Router>
  );
}

export default App;
