import React from 'react';

//Components

import Header from './component/header';
import Alpha from './component/alpha';
import Client from './component/client';
import Wwd from './component/wwd';
import Pictures from './component/pictures';
import Work from './component/work';
import Footer from './component/footer';




//CSS

import './App.css';
import './Alpha.css';
import './client.css';
import './wwd.css';
import './Pictures.css';
import './work.css';
import './footer.css';







function App() {
  return (
    <div className="App">
            
      <Header /> 
        <Alpha />
          <Client />
          <Pictures />
            <Wwd />
            <Work />
            <Footer />
    </div>
  );
}

export default App;
