import React, { useEffect } from 'react';
import Homepage from './pages/Home/Homepage';
import './App.css';
import { useDispatch } from 'react-redux';
import { setFilterCharactersAction } from './redux/searcherDuck';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterCharactersAction())
  })

  return (
    <div className="App">
      <Homepage />
    </div>
    
  );
}

export default App;
