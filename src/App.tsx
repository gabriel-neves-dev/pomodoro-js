import React from 'react';
import logo from './logo.svg';

import {PomodoroTimer} from './components/pomodoro-timer';



function App() {
  return (
    <div className="App"> 
      
      <PomodoroTimer 
      pomodoroTime={1500} 
      shortRestTime={300} 
      longRestTime={900} 
      cycles={4} 
      />
      
    </div>
  );
}

export default App;
