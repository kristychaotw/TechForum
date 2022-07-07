import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuesions } from "../reducers/questionsSlice";
import {
  P,
  Indicator,
  IndicatorWrapper,
  UserInfoSection,
  QuestionSection,
  QuestionWrapper,
  PStyled,
} from "./style/component.css";

export default function QuestionListing() {
  const questions = useSelector((state) => state.questions);

  function handleClick(e) {
    // window.open(e);
  }

  return (
    <>
      {questions.loading && <div>Loading...</div>}
      {!questions.loading && questions.error ? (
        <div>Error:{questions.error}</div>
      ) : null}
      {!questions.loading &&
        questions.questions.length &&
        questions.questions.map((q) => (
          <QuestionWrapper onClick={() => handleClick(q.link)}>
            <QuestionSection>
              <h3>{q.title}</h3>
              <IndicatorWrapper>
                <Indicator>
                  <h4>Score</h4>
                  <P color={q.score < 0 ? "#C73E32" : "#000"}>{q.score}</P>
                </Indicator>
                <Indicator>
                  <h4>Answers</h4>
                  {q.answer_count > 0 ? (
                    <PStyled
                      color={q.is_answered && "#fff"}
                      bgc={q.is_answered && "#377E22"}
                    >
                      {q.answer_count}
                    </PStyled>
                  ) : (
                    <P>{q.answer_count}</P>
                  )}
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
          </QuestionWrapper>
        ))}
    </>
  );
}
