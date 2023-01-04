import React,{useState} from 'react'
import "../App.css"
import Progress from './Progress';
import Answers from './Answers'
import Question from './Question'
import { questions } from './Questions';

function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState("");
    const [showReults, setShowResults] = useState(false);

    const question = questions[currentQuestion];
    // when click on option text (A, B, C, D)
    const handleClick = (e) => {
      setCurrentAnswer(e.target.value);
      // when select an option error message will empty
      setError("");
    };
    // error
    const renderError = () => {
      if (!error) {
        return;
      }
      return <div className="error">{error}</div>;
    };

    // const counter = (question, answer)=> {
    //     let counter = 1
    //     for(let i=0; i<question.length; i++){
    //       if (question.correct_answer === answer.answer) {
    //           return counter++
    //         } 
    //     }
    // }

    // Result is correct or falied
    const renderResultMark = (question, answer) => {
          if (question.correct_answer === answer.answer) {
            return <span className="correct">Correct</span>;
          } else {
            return <>
            <span className="failed"> Incorrect</span>
            <div className='correct-answer'>
            <span>You select: {answer.answer} - Correct answer is: {question.correct_answer}</span>
            </div>
            </>
          }
    };
    // show the result with question
    const renderResultData = () => {
      return answers.map((answer) => {
        const question = questions.find(
          (question) => question.id === answer.questionId
        );
        return (
            <>
            {/* <div>{counter(question,answer)}</div> */}
            <div key={question.id}>
            Question {question.id}: {renderResultMark(question, answer)}
          </div>
          </>
        );
      });
    };
  
    const next = () => {
      const answer = {
        questionId: question.id,
        answer: currentAnswer,
      };
      if (!currentAnswer) {
        setError("Please select an option");
        return;
      }
      answers.push(answer);
      setAnswers(answers);
      setCurrentAnswer("");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        return;
      }
      setShowResults(true);
    };
    // restart button everything will be empty and start from beginning
    const restart = () => {
      setAnswers([]);
      setCurrentAnswer("");
      setCurrentQuestion(0);
      setShowResults(false);
    };
    // when all questions complete then it shows
    if (showReults) {
      return (
        <div className="container results">
        <h4> Your test Results </h4>
          {/* display all question */}
          {renderResultData()}
          <button className="btn btn-primary" onClick={restart}>
            Restart
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          {/* current = {question.id} also works*/}
          <Progress current={currentQuestion + 1} total={questions.length} />
          <div className='container-ques-ans-display'>
          <Question question={question.question} />
          {/* display error message */}
          <div>
          {renderError()}
          <Answers
            question={question}
            currentAnswer={currentAnswer}
            handleClick={handleClick}
          />
          <button className="btn btn-primary" onClick={next}> Next</button>
          </div>
        </div>
        </div>
      );
    }
}

export default Home
