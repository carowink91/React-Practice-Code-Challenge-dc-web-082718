import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentFour.map(sushiObj => <Sushi key={sushiObj.id} id={sushiObj.id} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi} sushi={sushiObj}/>)
        }
        <MoreButton handleMoreClick={props.handleMoreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
