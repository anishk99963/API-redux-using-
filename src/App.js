import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch } from 'react-router-dom';
import store from "./components/store";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
