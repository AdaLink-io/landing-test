import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info,id }) => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <article className='question' onClick={() => setExpanded(!expanded)}>
      <header className='gpt3__features-container_feature-title'>
        <h1 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h1>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      
      <div className='gpt3__features-container_feature-text-faq '><p id={"q"+id} style={{height: expanded?document.getElementById("q"+id).scrollHeight:'0px'}}>{info}</p></div>
      
    </article>
  )
}

export default Question
