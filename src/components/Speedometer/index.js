import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Container_1">
        <div className="Container">
          <h1 className="Heading">SPEEDOMETER</h1>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="Runspeedmph">Speed is {speed}mph</h1>
          <p className="Description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="Button-Container">
            <button
              type="button"
              className="Accelerate"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>

            <button
              type="button"
              className="ApplyBrake"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
