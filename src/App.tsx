import React, { useEffect } from 'react';
import Homepage from './pages/Home/Homepage';
import './App.css';
import { useDispatch } from 'react-redux';
import { setFilterAction } from './redux/searcherDuck';
import { Filter } from './redux/reduxTypes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterAction(Filter.characters))
  })

  return (
    <div className="App">
      <Homepage />
    </div>
    
  );
}

export default App;
