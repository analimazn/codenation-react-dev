import React from 'react';

/* Style */
import './App.scss';

/* Components */
import Topbar from "./components/Topbar"
import Filters from "./components/Filters"
import Contacts from "./components/Contacts"
import Contact from "./components/Contact"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }))
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters/>
        { this.state.loading
          ? <h1>Loading...</h1>
          : <Contacts>
              {this.state.contacts.map(contact => (
                <Contact key={contact.id} data={ contact } />
              ))}
            </Contacts>
        }
      </React.Fragment>
    )
  }
}

export default App;
