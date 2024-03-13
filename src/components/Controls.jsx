import React from 'react'
import SwitchLeft from '../images/switch-left.png'
import SwitchRight from '../images/switch-right.png'
function Controls(props) {
    const [bandState, setBandState] = React.useState(false)

    function handleVolumeChange(event) {
        const newVolume = parseFloat(event.target.value);
        props.setVolume(newVolume);
      }
    return (
        <div className='controls-wrapper'>
            <div className='control'>
                <p>Power</p>
                <img src={props.isPowered ? SwitchRight : SwitchLeft} 
                alt="control-switch-image" 
                onClick={props.powerHandler}/>
            </div>
            <div id="display"><p>{props.display}</p></div>
            <div className='volume-slider'>
                <input type="range" 
                min={0} 
                max={1} 
                step={0.01} 
                value={props.volume} 
                onChange={handleVolumeChange}/>
            </div>
            <div className='control'>
                <p>Band</p>
                <img src={bandState ? SwitchRight : SwitchLeft} 
                    alt="control-switch-image" 
                    onClick={() => {
                    props.bandHandler()
                    setBandState(!bandState)}}/>
            </div>
        </div>
    )
}

export default Controls