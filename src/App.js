import React from 'react';
import  {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import ListOfFacts from './Components/ListOfFacts/ListOfFacts'
import EditBadgerFact from './Components/EditBadgerFact/EditBadgerFact'
import CreateNewBadgerFact from './Components/CreateNewBadgerFact/CreateNewBadgerFact'
import DeleteBadgerFact from './Components/DeleteBadgerFact/DeleteBadgerFact'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListOfFacts} />
        <Route path="/edit/:id" component={EditBadgerFact} />
        <Route path="/new" component={CreateNewBadgerFact} />
        <Route path="/delete/:id" component={DeleteBadgerFact} />
      </Switch>
    </Router>
  );
}

export default App;
