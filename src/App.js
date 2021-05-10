import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './MainPage'
import Thankyou from './Thankyou'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/thanks">
          <Thankyou />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
