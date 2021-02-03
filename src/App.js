import "./App.css";

import { Route, Switch } from "react-router";

import MembersList from "./components/MembersList";
import MemberProfile from "./components/MemberProfile";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/books/:bookSlug">
          <BookDetails />
        </Route>
        <Route path="/members/:memberSlug">
          <MemberProfile />
        </Route>
        <Route path="/">
          <MembersList />
          <BooksList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
