import React from "react";
import {
  Indicator,
  IndicatorWrapper,
  UserInfoSection,
  QuestionSection,
  QuestionWrapper,
} from "./style/component.css";

export default function QuestionListing() {
  return (
    <QuestionWrapper>
      <QuestionSection>
        <h3>title</h3>
        <IndicatorWrapper>
          <Indicator>
            <h4>Score</h4>
            <p>num</p>
          </Indicator>
          <Indicator>
            <h4>Answers</h4>
            <p>num</p>
          </Indicator>
          <Indicator>
            <h4>Viewed</h4>
            <p>num</p>
          </Indicator>
        </IndicatorWrapper>
        <UserInfoSection>
          <img></img>
          <h5>username</h5>
        </UserInfoSection>
      </QuestionSection>
    </QuestionWrapper>
  );
}
