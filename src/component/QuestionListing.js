import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  P,
  Indicator,
  IndicatorWrapper,
  UserInfoSection,
  QuestionSection,
  QuestionWrapper,
  PStyled,
} from "./style/component.css";

export default function QuestionListing({ setPageNumber }) {
  const questions = useSelector((state) => state.questions.questions); // has_more, items
  const questionItems = useSelector((state) => state.questions.questionItems);
  const observer = useRef();

  const lastQuestionRef = useCallback(
    (node) => {
      if (questions.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && questions.has_more) {
          setPageNumber((prevNumber) => prevNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [questions.loading, questions.has_more]
  );

  function handleClick(e) {
    window.open(e);
  }

  return (
    <>
      <div>{questions.loading && "Loading..."}</div>
      <div>
        {!questions.loading &&
          questions.error &&
          "Error:" + `${questions.error}`}
      </div>
      {questions.items !== undefined &&
        questionItems.map((q, index) => {
          if (questionItems.length === index + 1) {
            return (
              <QuestionWrapper
                ref={lastQuestionRef}
                onClick={() => handleClick(q.link)}
              >
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
            );
          } else {
            return (
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
            );
          }
        })}
    </>
  );
}
