import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import CharactersRYM from "./components/CharactersRYM/CharactersRYM"

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">
            {/* Nueva sección Rick and Morty */}
            <h3 className="h3"> Rick and Morty</h3>
            {/* Fin nueva sección Rick and Morty */}            
            <CharactersRYM/> 
          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
