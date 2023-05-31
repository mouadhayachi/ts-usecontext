import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    </div>
  );
}

export default App;