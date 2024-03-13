import React from 'react'

function Drumpad(props) {
    const audioRef = React.useRef(null);

    function audioHandler(name) {
        if (props.isPowered) {
            audioRef.current.volume = props.volume
            audioRef.current.play()
            props.setDisplay(name) 
        }
        
    }
    return (
            <div className="drum-pad" id={props.data.letter} onClick={() => audioHandler(props.data.name)}>
                    <p className='drum-pad-text'>
                    <audio  className="clip" 
                    id={props.data.letter} 
                    ref={audioRef} 
                    src={props.isPowered && props.data.soundUrl}> 
                    </audio>
                    {props.data.letter}
                    </p>
            </div>
    )
}

export default Drumpad
