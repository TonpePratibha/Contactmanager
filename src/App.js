// import { useEffect, useState } from "react";
// import "./App.css";
// import { v4 as uuid } from "uuid";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail";
import EditContact from "./Components/EditContact";


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "./App.css";
// import Header from "./Header";
// import AddContact from "./AddContact";
// import ContactList from "./ContactList";
// import ContactDetail from "./ContactDetail";
// import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />

        <ContactsCrudContextProvider>

        <Routes>
          <Route
            path="/"
            exact
            element={<ContactList/>}
          />
          <Route
            path="/add"
            element={<AddContact />}
          />

          <Route
            path="/edit"
            element = {<EditContact />}
          />

          <Route path="/contact/:id" element={<ContactDetail/>} />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;