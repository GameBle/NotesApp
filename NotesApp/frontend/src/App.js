import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NotesListPage/>
      </div>
    </Router>
  );
}

export default App;
