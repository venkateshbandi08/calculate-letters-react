// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    enteredText: '',
  }

  onChangeTextInput = event => {
    this.setState({
      enteredText: event.target.value,
    })
  }

  render() {
    const {enteredText} = this.state
    const modifiedEnteredText = enteredText.replace(/\s/g, '')
    const x = modifiedEnteredText.length
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="content-info-container">
            <h1 className="main-heading"> Calculate the Letters you enter </h1>
            <div className="input-element-text-container">
              <label className="label-name" htmlFor="input-element">
                Enter the phrase
              </label>
              <input
                type="text"
                id="input-element"
                className="input-text-box"
                onChange={this.onChangeTextInput}
              />
            </div>
            <div className="num-of-letters-button">
              <p className="para"> No.of letters: {x} </p>
            </div>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
