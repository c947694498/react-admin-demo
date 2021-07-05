import './App.css';
import routes from './router/routes'
import RenderRouter from './router/RenderRouter'
// import {Switch, Route} from 'react-router-dom'
// import Home from './views/Home'
// import My from './views/My'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RenderRouter routes={routes}></RenderRouter>
      {/* <Switch>
        <Route path="/Home">{Home}</Route>
        <Route path="/My">{My}</Route>
      </Switch> */}
    </div>
  );
}

export default App;
