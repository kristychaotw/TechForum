import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`;

//Searching Bar
export const SearchingBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 10px;
  box-sizing: border-box;
  input {
    border: 2px solid #b7d7e2;
    padding: 10px;
    box-sizing: border-box;
  }
  input[type="text"] {
    width: 80%;
    border-radius: 5px 0 0 5px;

    :focus {
      outline: 0px;
    }
  }

  input[type="submit"] {
    width: 10%;
    background-color: #b7d7e2;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    input[type="text"] {
      width: 60%;
    }
    input[type="submit"] {
      width: 30%;
    }
  }
`;

// Trending Tags
export const TrendingWrapper = styled.div`
  margin-top: 60px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${({ color }) => color};
  border-radius: 5px;
  padding: 10px 5px;
  margin-right: 8px;
  margin-bottom: 10px;
  border: 2px solid #b7d7e2;
  background-color: ${({ bgc }) => bgc};

  :hover {
    color: #000;
  }

  :focus {
    background-color: #b7d7e2;
    color: #000;
  }
`;

// Question Listing
export const QuestionWrapper = styled.div`
  border-bottom: 1px solid gray;
`;

export const QuestionSection = styled.div`
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: 23% 23% 23% auto;
  grid-column-gap: 30px;
  grid-template-areas:
    "title title title userinfo"
    "indicator indicator indicator userinfo";
  transition: all 0.3s;

  h3 {
    grid-area: title;
  }
  :hover {
    background-color: #b7d7e250;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    grid-column-gap: 30px;
    grid-template-areas:
      "title"
      "indicator"
      "userinfo";
  }

  @media screen and (max-width: 600px) {
  }
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: indicator;

  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
export const Indicator = styled.div`
  text-align: center;
  h4 {
    color: #963a39;
  }
  p {
    width: 80px;
    margin: 0 auto;
  }
`;

export const P = styled.p`
  width: 80px;
  margin: 0 auto;
  color: ${({ color }) => color || "#000"};
  border: solid #377e22 ${({ border }) => border || "0px"};
`;

export const PStyled = styled.p`
  width: 80px;
  margin: 0 auto;
  border: 1px solid #377e22;
  color: ${({ color }) => color || "#000"};
  background-color: ${({ bgc }) => bgc || "#fff"};
`;

export const UserInfoSection = styled.div`
  grid-area: userinfo;
  text-align: center;
  img {
    border-radius: 100%;
    width: 150px;
    aspect-ratio: 1/1;
    margin-top: 20px;
  }
`;
