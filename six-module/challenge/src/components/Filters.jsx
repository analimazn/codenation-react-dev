import React from 'react';
import Button from './Button'
import Input from './Input'

class Filters extends React.Component {
  constructor() {
    super()
    this.state = {
      sortBy: ''
    }
  }

  handleSelectedFilter(event, by) {
    event.preventDefault()
    this.setState({
      sortBy: by
    })

    this.props.toggleSort(by)
  }

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <Input
              onChange={this.props.searchBy}
            />
            <Button
              isSelected="filters__search__icon"
              handleClick={event => this.handleSelectedFilter(event, 'search')}
            >
              <i className="fa fa-search" />
            </Button>
          </div>

          <Button
            isSelected={this.state.sortBy === 'name' ? 'filters__item is-selected' : 'filters__item'}
            handleClick={event => this.handleSelectedFilter(event, 'name')}
            title="Nome"
          >
            <i className="fas fa-sort-down" />
          </Button>

          <Button
            isSelected={this.state.sortBy === 'country' ? 'filters__item is-selected' : 'filters__item'}
            handleClick={event => this.handleSelectedFilter(event, 'country')}
            title="País"
          >
            <i className="fas fa-sort-down" />
          </Button>

          <Button
            isSelected={this.state.sortBy === 'company' ? 'filters__item is-selected' : 'filters__item'}
            handleClick={event => this.handleSelectedFilter(event, 'company')}
            title="Empresa"
          >
            <i className="fas fa-sort-down" />
          </Button>

          <Button
            isSelected={this.state.sortBy === 'department' ? 'filters__item is-selected' : 'filters__item'}
            handleClick={event => this.handleSelectedFilter(event, 'department')}
            title="Departamento"
          >
            <i className="fas fa-sort-down" />
          </Button>

          <Button
            isSelected={this.state.sortBy === 'admissionDate' ? 'filters__item is-selected' : 'filters__item'}
            handleClick={event => this.handleSelectedFilter(event, 'admissionDate')}
            title="Data de admissão"
          >
            <i className="fas fa-sort-down" />
          </Button>
        </section>
      </div>
    );
  }
}

export default Filters;
