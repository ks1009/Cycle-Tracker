import React, { useState, useEffect } from 'react';

// trying to show mongoDB to front end
function History() {
  // update cycle button
  function handleSubmit(e) {
    e.preventDefault();
    console.log('button updated', { date });

    // make put request to api when clicked
    fetch('/api', { method: 'PUT' })
      .then(function (response) {
        if (response.ok) {
          console.log(`${date} was updated in database`);
          return;
        }
        throw new Error('request failed');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Cycle History</h1>
      <div className='previous-data'>
        <div>Database</div>
        <p>Will show all previous cycles</p>
        <div>
          <button onClick={handleSubmit} className='updateCycle'>
            Update Cycle
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;
