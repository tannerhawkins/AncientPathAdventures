import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectCurrentStepData,
} from "../../app/module/selectors";
import { setCurrentStep } from "../../app/module/actions";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const stepData = useSelector(selectCurrentStepData);
  const questions = stepData.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <StyledQuiz>
      {showScore ? (
        <ScoreSection data-test="score">
          You scored {score} out of {questions.length}
          <StyledSubmitButton
            onClick={() => dispatch(setCurrentStep(currentStep + 1))}
            data-test="next-step"
          >
            Submit Quiz
          </StyledSubmitButton>
        </ScoreSection>
      ) : (
        <QuestionCard
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </StyledQuiz>
  );
};

const StyledQuiz = styled.div`
  background-color: ${Constants.COLOR.DARK_GREEN};
  width: 90%;
  min-height: 200px;
  height: 90vh;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;

const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  flex-direction: column;
  align-self: center;
`;

const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`;

const QuestionText = styled.div`
  font-size: 50px;
  margin-bottom: 12px;
`;

const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AnswerButton = styled.button`
  width: 100%;
  font-size: 35px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${Constants.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  margin-top: 30px;
  min-width: 120px;
  background-color: ${Constants.COLOR.GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default Quiz;
