import React, { useState } from "react";
import "./App.css";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState("");
  const [showReults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answer_a:
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
      answer_b: "Hooks are still in beta and not available yet",
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c",
    },
  ];
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
  // Result is correct or falied
  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Falied</span>;
  };
  // show the result with question
  const renderResultData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question}-{renderResultMark(question, answer)}
        </div>
      );
    });
  };

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };
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
        Results
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
        {/* 1.question = props, 2.question = object name(original questions) 3.question=object property*/}
        <Question question={question.question} />
        {/* display error message */}
        {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button className="btn btn-primary" onClick={next}>
          Next
        </button>
      </div>
    );
  }
}
export default App;
