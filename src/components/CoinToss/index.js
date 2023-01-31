// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imageUrl: false,
  }

  onClickButton = () => {
    const {heads, tails, imageUrl, total} = this.state

    this.setState(prevState => ({total: prevState.total + 1}))
    // console.log(total)

    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({imageUrl: !prevState.imageUrl}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    return {heads, tails, imageUrl, total}
  }

  render() {
    const {heads, tails, total, imageUrl} = this.state

    let img = ''
    if (imageUrl) {
      img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="container">
        <div className="sub-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={img} alt="toss result" />

          <button onClick={this.onClickButton} type="button">
            Toss Coin
          </button>
          <div className="coins">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
