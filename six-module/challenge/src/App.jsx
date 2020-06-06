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
      data: [],
      contacts: [],
      loading: true
    }
  }

  searchBy = event => {
    const { contacts, data } = this.state
    const value = String(event.target.value).toLowerCase()

    const searchContactsBy = contacts.filter(contact => {
      const name = String(contact.name).toLowerCase()
      return new RegExp(value, 'i').test(name)
    })

    value.length
      ? this.setState({ contacts: searchContactsBy })
      : this.setState({ contacts: data })
    
  }

  sortBy = by => {
    const { contacts } = this.state

    const sortedContactsBy = contacts.sort((a, b) => {
      const contactA = a[by]
      const contactB = b[by]

      if (contactA > contactB) return 1;
      if (contactB > contactA) return -1;

      return 0;
    })
    this.setState({ contacts: sortedContactsBy })
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => this.setState({ data: data, contacts: data }))
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar/>
        <Filters toggleSort={this.sortBy} searchBy={this.searchBy}/>
          <Contacts>
            {this.state.contacts.map(contact => (
              <Contact key={contact.id} data={ contact } />
            ))}
          </Contacts>
      </div>
    )
  }
}

export default App;
