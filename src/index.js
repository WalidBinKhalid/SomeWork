import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
  
  class Main extends React.Component {
    render() {
      return (
        <div className="App">
          <App />
        </div>
      );
    }
  }
  

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
