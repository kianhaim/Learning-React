import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuotes from "./components/pages/NewQuotes";
import AllQuotes from "./components/pages/AllQuotes";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
