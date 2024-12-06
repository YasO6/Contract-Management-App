/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Contracts from "views/examples/Contracts.js";
import Clients from "views/examples/Clients";
import AddClient from "views/examples/Client/AddClient";
import AddContract from "views/examples/Contract/AddContract";
import UpdateClient  from "views/examples/Client/UpdateClient";
import UpdateContract  from "views/examples/Contract/UpdateContract";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/Home-page" exact element={<Landing />} />
      <Route path="/contracts" exact element={<Contracts />} />
      <Route path="/clients" exact element={<Clients />} />
      <Route path="/add-client" exact element={<AddClient />} />
      <Route path="/add-contract" exact element={<AddContract />} />  
      <Route path="/update-contract" exact element={<UpdateContract />} />
      <Route path="/update-client" exact element={<UpdateClient/>} />
 
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
