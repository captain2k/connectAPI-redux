import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';




function App() {
  const showContents = (routes) => {
    var result = null;
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )
    })
    return result
  }

  return (
    <Router>
      <div>
        <Menu />
      </div>
      <Switch>
        {showContents(routes)}
      </Switch>
    </Router >
  );
}

export default App;
