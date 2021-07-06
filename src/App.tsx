import './App.less';
import routes from './router/routes'
import RenderRouter from './router/RenderRouter'

const App = () => {
  return (
    <div className="App">
      <RenderRouter routes={routes}></RenderRouter>
    </div>
  );
}

export default App;
