import React, { createContext, useState } from "react";
import "../App.css";
import Progress from "./Progress";
import Answers from "./Answers";
import Question from "./Question";
import { questions } from "./Questions";

// export const userContext = createContext()

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState("");
  const [showReults, setShowResults] = useState(false);

  const question = questions[currentQuestion];
  const handleClick = (e) => {
    setCurrentAnswer(e.target.value);
    setError("");
  };
  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    } else {
      return (
        <>
          <span className="failed"> Incorrect</span>
          <div className="correct-answer">
            <span>
              You select: {answer.answer} - Correct answer is:{" "}
              {question.correct_answer}
            </span>
          </div>
        </>
      );
    }
  };

  const renderResultData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return (
        <>
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
  const restart = () => {
    setAnswers([]);
    setCurrentAnswer("");
    setCurrentQuestion(0);
    setShowResults(false);
  };
  if (showReults) {
    return (
      <div className="container results">
        <h4> Your test Results </h4>
        <div className="container-result-body">{renderResultData()}</div>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        {/* <userContext.Provider value = {{currentQuestion, question}}> */}
        <Progress current={currentQuestion + 1} total={questions.length}/>
        <div className="container-ques-ans-display">
          <Question question={question.question} />
          <div>
            {renderError()}
            <Answers
              question={question}
              currentAnswer={currentAnswer}
              handleClick={handleClick}
            />
            <button className="btn btn-primary" onClick={next}>
              {" "}
              Next
            </button>
          </div>
        </div>
        {/* </userContext.Provider> */}
      </div>
    );
  }
}

export default Home;
