import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="filters__search__input"
        onChange={this.props.onChange}
        placeholder="Pesquisar"
      />
    )
  }
}

export default Input;
