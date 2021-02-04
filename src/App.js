import "./App.css";

import { Route, Switch } from "react-router";

import MembersList from "./components/MembersList";
import MemberProfile from "./components/MemberProfile";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import MemberForm from "./components/MemberForm";
import BookForm from "./components/BookForm";
import Home from "./components/Home";
import { AppWrapper } from "./styles";

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/books/new">
          <BookForm />
        </Route>

        <Route path="/books/:bookSlug">
          <BookDetails />
        </Route>

        <Route path="/books">
          <BooksList />
        </Route>

        <Route path="/members/new">
          <MemberForm />
        </Route>

        <Route path="/members/:memberSlug">
          <MemberProfile />
        </Route>

        <Route path="/members">
          <MembersList />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
