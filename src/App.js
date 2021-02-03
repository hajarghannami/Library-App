import "./App.css";

import { Route, Switch } from "react-router";

import MembersList from "./components/MembersList";
import MemberProfile from "./components/MemberProfile";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import MemberForm from "./components/MemberForm";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/books/new">
          <BookForm />
        </Route>

        <Route path="/books/:bookSlug">
          <BookDetails />
        </Route>

        <Route path="/members/new">
          <MemberForm />
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
