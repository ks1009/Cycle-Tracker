import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import History from './components/navbar/data/History.jsx';
import Calender from './components/Calender.jsx';
import Symptoms from './components/navbar/pages/Symptoms.jsx';
import Fertility from './components/navbar/pages/Fertility.jsx';
import Fitness from './components/navbar/pages/Fitness.jsx';
import Sleep from './components/navbar/pages/Sleep.jsx';
import Health from './components/navbar/pages/Health.jsx';
import Journal from './components/navbar/pages/Journal.jsx';
import './stylesheets/styles.css';
import background from './assets/bg.jpg';

// click on symptoms, sex/fertility, nutrition/fitness, sleep, medication/health/weight, mood/journal links above/below cal -> should be links  and brings you to next page

function App() {
  return (
    <>
      <div
        className='bg'
        style={{
          backgroundImage: `url(${background})`,
          height: '943px',
        }}
      >
        <Calender />
        <div className='container'>
          <Routes>
            <Route path='/history' element={<History />} />
            <Route path='/symptoms' element={<Symptoms />} />
            <Route path='/fertility' element={<Fertility />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/sleep' element={<Sleep />} />
            <Route path='/health' element={<Health />} />
            <Route path='/journal' element={<Journal />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
