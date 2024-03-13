 import React from "react";
import Drumpad from "./Drumpad"
import HeaterKit from '../HeaterKit'
import SmoothPianoKit from "../SmoothPianoKit"
import Controls from "./Controls"

function DrumMachine() {
    const [isPowered, setIsPowered] = React.useState(false)
    const [KitSounds, setKitSounds] = React.useState(HeaterKit)
    const [volume, setVolume] = React.useState(0.5);
    const [display, setDisplay] = React.useState("")
    const SoundsArray = KitSounds.map(sound => <Drumpad key={sound.id} 
                                                                    data={sound} 
                                                                    isPowered={isPowered}
                                                                    volume={volume}
                                                                    setDisplay={setDisplay}/>)
    
    function powerHandler() {
        setIsPowered(prevIsPowered => !prevIsPowered)
        
    }

    function bandHandler() {
        setKitSounds(prevKitSounds => {
            if (prevKitSounds === HeaterKit){
                setDisplay("Smooth Piano Kit")
                return SmoothPianoKit
            } else {
                setDisplay("Heater Kit")
                return HeaterKit
                }
        })
        
    }
    
    return (
        <div id="drum-machine">
            <div id="drumpad-wrapper">
                {SoundsArray} 
            </div>
            <div className="logo-ctrls">
                <div className="logo">
                    <div className="inner-logo ">KUANDOH&nbsp;</div>
                    <i className="inner-logo fa fa-free-code-camp"></i>
                </div>
                <Controls data={KitSounds} 
                        powerHandler={powerHandler} 
                        isPowered={isPowered}
                        volume={volume}
                        setVolume={setVolume}
                        display={display}
                        bandHandler={bandHandler}/>
            </div>  
        </div>
    )
}

export default DrumMachine