import './App.css';
import _1Topbar from './Component/_1Topbar';
import _2SocialBar from './Component/_2SocialBar';
import { useState } from 'react';



function App() {

  const [bgmode, setbgmode] = useState('bg-slate-800')
  const [textMode, settextMode] = useState('text-white')

  const handleMode = () => {
    setbgmode((prevMode) => (prevMode === 'bg-slate-200' ? 'bg-slate-800' : 'bg-slate-200'))
    settextMode((prevMode) => (prevMode == 'text-gray-600' ? 'text-white' : 'text-gray-600'))
  }




  return (
    <div className="App">
      <_1Topbar handleMode={handleMode} bgmode={bgmode} textMode={textMode} />
      <_2SocialBar />

    </div>
  );
}

export default App;
