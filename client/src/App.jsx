import React, { useState } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';

const App = () => {
  const [form, setForm] = useState('welcome');

  return (
    <>
    {(form === 'welcome') ? <Welcome setForm={setForm}/> : null}
    </>
  )
}

export default App;