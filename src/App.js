import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = '리랴릭서';
    const style = {
      backgroundColor: 'aqua',
      padding: '1rem',
      color: 'blue',
      fontSize: '1rem'
    }
    return (
      <Fragment>
        <div style={style}>
          {
            1 + 1 === 2
              ? ('맞아 ')
              : ('틀려')
          }
          {
            (() =>{
              if(name === '리랴릭서') return (<div className="App">리랴릭서가맞다</div>);
              if(name === '리리리리') return ('땡');  
            })()
          }
        </div>
        <div className="App">
          <input type='text' value={name}/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
