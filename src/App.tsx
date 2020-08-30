import React, { useEffect } from 'react';
import Homepage from './pages/Home/Homepage';
import './App.css';
import { useDispatch } from 'react-redux';
import { setFilterAction } from './redux/searcherDuck';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterAction('characters'))
  })

  return (
    <div className="App">
      <Homepage />
    </div>
    
  );
}

export default App;
