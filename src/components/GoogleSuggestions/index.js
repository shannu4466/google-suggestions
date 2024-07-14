import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  addSuggestionfromList = value => {
    this.setState({searchInput: value})
  }

  changeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="logo"
          alt="google logo"
        />
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search Google"
            onChange={this.changeSearchInput}
            value={searchInput}
          />
        </div>
        <ul className="list-items">
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              addSuggestion={eachSuggestion}
              key={eachSuggestion.id}
              addSuggestionfromList={this.addSuggestionfromList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
