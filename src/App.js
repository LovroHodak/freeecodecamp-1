import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className='container' >
      <h3>0 BD today</h3>
      <List />
      <button onClivk={() => console.log('You clicked')} >Clear all!</button>
    </section>
  </main>;
}

export default App;
