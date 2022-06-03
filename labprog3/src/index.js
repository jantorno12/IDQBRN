/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import {Row, Col,} from "reactstrap";

import Login from "views/Login.js";

ReactDOM.render(
  <BrowserRouter>
  <div className="content">
    <Switch>
      <Route path="/admin" render={(props) => <Login {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </div>
  </BrowserRouter>,
  document.getElementById("root")
);
