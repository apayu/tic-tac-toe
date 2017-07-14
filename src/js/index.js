import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Game from "./pages/Game";

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <Layout />
  </HashRouter>
  ,app);

