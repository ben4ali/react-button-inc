import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { Create } from './components/Create'
import { ButtonDetails } from './components/ButtonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/create" element={<Create />}/>
            <Route exact path="/buttons/:id" element={<ButtonDetails />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
