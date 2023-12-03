import {Component} from 'react'

import './index.css'

import {Message, message} from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {l: true}

  ChangeContent = () => {
    const {l} = this.state
    if (l === true) {
      this.setState({l: false})
    } else {
      this.setState({l: true})
    }
  }

  render() {
    const {l} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {l ? (
            <h1 className="heading">{Message}</h1>
          ) : (
            <h1 className="heading">{message}</h1>
          )}
          {l ? (
            <button className="button" onClick={this.ChangeContent}>
              {Login}
            </button>
          ) : (
            <button className="button" onClick={this.ChangeContent}>
              {Logout}
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Home
