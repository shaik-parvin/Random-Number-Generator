// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="result">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
