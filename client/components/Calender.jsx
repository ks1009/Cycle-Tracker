import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import Navbar from './navbar/Navbar.jsx';
import '../stylesheets/styles.css';
import '../stylesheets/Calendar.css';

function Calender() {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState('28');

  const date = value;

  console.log(cycle);
  const cycleLength = parseInt(cycle);

  // add cycle button
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('button worked', { date });

    // make post request to api when clicked
    fetch('/api', { method: 'POST' })
      .then(function (response) {
        if (response.ok) {
          console.log(`${date} was recorded in database`);
          return;
        }
        throw new Error('request failed');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // delete cycle button
  function handleRemove(e) {
    e.preventDefault();
    console.log(`${date} was deleted from database`);
  }
  // make delete request to api when clicked
  fetch('/api', { method: 'POST' })
    .then(function (response) {
      if (response.ok) {
        console.log(`${date} was deleted in database`);
        return;
      }
      throw new Error('request failed');
    })
    .catch(function (error) {
      console.log(error);
    });

  // add an alert for when the next cycle is coming?

  return (
    <>
      <div>
        <Navbar />
        <label htmlFor='cycle'>cycle length: </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className='cycle-length-dropdown'
        >
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
        </select>
      </div>

      <p className='last-cycle'>
        select your last cycle's start date from the calendar:
      </p>

      <div className='calender'>
        <Calendar onChange={onChange} value={value} />
      </div>

      <div>
        <div className='row'>
          <div>
            <div className='nextCycle'>
              <p>
                Next Cycle Prediction:{' '}
                <Moment format='MMMM Do YYYY' add={{ days: cycleLength - 1 }}>
                  {date}
                </Moment>
              </p>
            </div>
            <div className='ovulationDay'>
              <p>
                Approximate Ovulation Day:{' '}
                <Moment
                  format='Do MMMM YYYY'
                  add={{ days: cycleLength - 1 - 14 }}
                >
                  {date}
                </Moment>
              </p>
            </div>
          </div>
        </div>
        {/* data will be fetched after button is clicked */}
        <button onClick={handleSubmit} className='addCycle'>
          Add Cycle
        </button>
        <button onClick={handleRemove} className='deleteCycle'>
          Delete Cycle
        </button>
      </div>
    </>
  );
}

export default Calender;
