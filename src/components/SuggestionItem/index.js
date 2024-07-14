import './index.css'

const SuggestionItem = props => {
  const {addSuggestion, addSuggestionfromList} = props
  const {suggestion, id} = addSuggestion

  const selectSuggestion = () => {
    addSuggestionfromList(suggestion)
  }
  return (
    <li onClick={selectSuggestion}>
      <p type="button">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
