import React from 'react';
import Background from './components/Background';
import Forground from './components/forground';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-800' >
        <Background />
        <Forground />
      </div>
    </>
  )
}

export default App