import React from 'react';

function Journal() {
  return (
    <div>
      {/* submit notes/thoughts/details -> becomes a list of pages you can look back on */}
      <h1>How are you feeling today?</h1>
      <form>
        <textarea>Some text...</textarea>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default Journal;
