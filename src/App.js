import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const people = [{ name: "Daenerys" }, { name: "Jon" }, { name: "Arya" }];
    return (
      <ol>
        {people.map(person =>
          <li>
            {person.name}
          </li>
        )}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
