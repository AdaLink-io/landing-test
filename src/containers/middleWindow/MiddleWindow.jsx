import React from 'react'
import './middleWindow.css'
import underConstruction from '../../assets/underConstruction.png'



function MiddleWindow(props) {
    return (props.trigger) ? (
        <div className='outsideMiddleWindow'>
            <div className='middleWindow-Body slide-in-fwd-center'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>  X  </button>
                <div className='windowTitle' style={{color:"white"}}>AdaLink DApps Suite</div>
                <div style={{display:"none"}} className='middleWindow-Body-image'>
                    <img src={underConstruction} alt="under construction"/>
                </div>
                <p style={{marginBottom:"2rem"}} >AdaLink's ecosystem is under development. Currently, there are three MVPs being developed along with a freshly new idea still in the conception phase.</p>
                <p><a href="https://app-preview.adalink.io" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"underline"}}>Affiliate Network for SPO Growth</a></p>
                <p><a href="https://www.test-frenchiedex.adalink.io" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"underline"}}>Frenchie DEX</a></p>
                <p><a href="https://tip-preview.adalink.io" target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"underline"}}>TipLinks</a></p>
                <button className='button-2' style={{marginTop:"2rem"}} onClick={() => props.setTrigger(false)}>OK</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default MiddleWindow;