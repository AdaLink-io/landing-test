import React from 'react'
import data from './data'
import SingleQuestion from './question'
import './faq.css'

const FAQ = () => {
  /*const [questions, setQuestions] = useState(data)*/
  const questions = data;
  //setQuestions=useState(data)
  return (
      <div className='gpt3__faq'  id="faq">
        <div className='gpt3__faq-card  section__margin'>
            <div className='gpt3__features-heading'>
                <h1 className='normal-text-color'>Frequently<e className='gradient__text'> Asked Questions</e></h1>
            </div>
            
            <section className='info'>
            {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
            ))}
            </section>
        </div>
      </div>
  )
}

export default FAQ