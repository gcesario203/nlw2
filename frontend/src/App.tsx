import React from 'react';
import './assets/styles/global.css'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'

function App() {
  return (
    <div className="App">
      <Landing/>
      <TeacherList></TeacherList>
    </div>
  );
}

export default App;
