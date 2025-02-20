import React from 'react'
import './underConstructionWindow.css'

function UnderConstructionWindow(props) {
    return (props.trigger) ? (
        <div className='outSideSuccessWindow'>
            <div className='mainSuccessWindow-Body'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>  X  </button>
                
                
                { props.children }
            </div>
        </div>
    ) : "";
}

export default UnderConstructionWindow;