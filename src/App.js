import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

// both the ways of writing the function are correct
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  )
}
// function App() {
//   return (
//     <main>
//       <div className='container'>
//         <h3>Questions and Answers About Login</h3>
//         <section className='info'>
//           {data.map((ques) => {
//             return <SingleQuestion key={ques.id} {...ques}/>
//           })}
//         </section>
//       </div>
//     </main>
//   )
// }

export default App;
