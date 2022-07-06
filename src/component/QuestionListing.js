import React, { useState, useEffect } from "react";
import {
  Indicator,
  IndicatorWrapper,
  UserInfoSection,
  QuestionSection,
  QuestionWrapper,
} from "./style/component.css";

export default function QuestionListing() {
  const [questions, setQuestions] = useState([]);
  let questionUrl =
    "https://api.stackexchange.com/2.3/questions?page=1&pagesize=20&order=desc&sort=activity&tagged=c&site=stackoverflow";
  useEffect(() => {
    fetch(questionUrl)
      .then((res) => res.json())
      .then((data) => setQuestions(data.items));
    }, []);
    console.log("questions", questions);
  return (
      <QuestionWrapper>
        {questions.map(q=>
      <QuestionSection>
        <h3>{q.title}</h3>
        <IndicatorWrapper>
          <Indicator>
            <h4>Score</h4>
            <p>{q.score}</p>
          </Indicator>
          <Indicator>
            <h4>Answers</h4>
            <p>{q.answer_count}</p>
          </Indicator>
          <Indicator>
            <h4>Viewed</h4>
            <p>{q.view_count}</p>
          </Indicator>
        </IndicatorWrapper>
        <UserInfoSection>
          <img src={q.owner.profile_image}></img>
          <h5>{q.owner.display_name}</h5>
        </UserInfoSection>
      </QuestionSection>
      )}
    </QuestionWrapper>
  );
}
