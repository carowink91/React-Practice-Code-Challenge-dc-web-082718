import React, { Fragment } from 'react'

class Sushi extends React.Component {
  handleClick = () => {
    this.props.eatSushi(this.props.sushi)
  }

  render() {
      return (
        <div className="sushi">
          <div className="plate" id={this.props.id}
            onClick={this.handleClick}>
            {this.props.eatenSushi.includes(this.props.id) ? <img src={null} width="100%" />
          :
          <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
    )
  }
}

export default Sushi
