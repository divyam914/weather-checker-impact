import React from 'react';
import ZipForm from './ZipForm.jsx';

class App extends React.Component {
  constructor() {
    super();
    console.log("HERE");
  }

  render() {
    console.log("RENDER APP");
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipForm />
      </div>
    )
  }
}

export default App;
