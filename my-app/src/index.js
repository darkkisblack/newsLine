import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
/* import { store } from './app/store';
import { Provider } from 'react-redux'; */
import MainPage from "./components/Main.jsx";
import Post from "./components/Post.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={<MainPage />} />
        <Route path="/news/:id" component={<Post />} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
