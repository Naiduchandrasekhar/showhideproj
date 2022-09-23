// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {displayJoeCard: true, displayJonasCard: true}

  onCardClick = () => {
    this.setState(prevState => ({displayJoeCard: !prevState.displayJoeCard}))
  }

  onJonasCardClick = () => {
    this.setState(prevState => ({
      displayJonasCard: !prevState.displayJonasCard,
    }))
  }

  render() {
    const {displayJoeCard, displayJonasCard} = this.state
    const modelClassName = displayJoeCard ? null : (
      <div className="show">
        <p>Joe</p>
      </div>
    )
    const className = displayJonasCard ? null : (
      <div className="showJonas">
        <p>Jonas</p>
      </div>
    )

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="card-container">
            <div className="firstNameButton">
              <button
                className="button"
                type="button"
                onClick={this.onCardClick}
              >
                Show/Hide Firstname
              </button>
              {modelClassName}
            </div>
            <div className="firstNameButton">
              <button
                className="button"
                type="button"
                onClick={this.onJonasCardClick}
              >
                Show/Hide Lastname
              </button>
              {className}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
