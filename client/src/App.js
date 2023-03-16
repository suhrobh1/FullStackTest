import './App.css';
// import items from './data/items';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';


function App() {

    // Lifting state for exercise that will need to be edited
    const [exerciseToEdit, setExerciseToEdit] = useState([]);
    
   
    
  return (
    <div className="App">
      <header className="App-header">
      <h1>Exercise Tracker</h1>
      <p>Tool for tracking excercises.</p>
      </header>
      <div className='body'>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage exerciseToEdit={exerciseToEdit} setExerciseToEdit={setExerciseToEdit}  />}></Route>
            <Route path="/add_exercise" element={ <AddExercisePage />}></Route>
            <Route path="/edit_exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
          </Routes>
        </Router>
        
        </div>


      <footer>
        2023 Suhrob Hasanov
      </footer>
    </div>
  );
}

export default App;
