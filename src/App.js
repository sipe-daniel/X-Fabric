
import Home from './Containers/Home/Home'
import AddPerson from './Containers/AddPerson/AddPerson'
import NotFound from './Components/NotFound/NotFound'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <AddPerson />}/>
          <Route path="/Home" exact render={() => <Home />}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
