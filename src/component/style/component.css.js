import styled from "styled-components";

//Searching Bar
export const SearchingBarWrapper = styled.div`
  input {
    border: 2px solid lightblue;
    padding: 10px;
  }
  input[type="text"] {
    width: 80%;
    box-sizing: border-box;
    border-radius: 5px 0 0 5px;

    :focus{
        outline:0px;
    }
  }

  input[type="submit"] {
    width: 20%;
    box-sizing: border-box;
    background-color: lightblue;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;




// Trending Tags
export const Button=styled.button`
cursor: pointer;
color:${({color})=>color};
border-radius: 5px;
padding:10px 5px;
margin-right: 8px;
margin-bottom: 10px;
border: 2px solid lightblue;
background-color: ${({bgc})=>bgc};

:hover{
    color: #000;
}

:focus{
    background-color: lightblue;
    color:#000;
}

`

// Question Listing
export const QuestionWrapper = styled.div`
  background-color: blue;
  border-bottom: 1px solid gray;
`;

export const QuestionSection = styled.div`
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-areas:
    "title title title userinfo"
    "indicator indicator indicator userinfo";

  h3 {
    grid-area: title;
  }
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: indicator;
`;
export const Indicator = styled.div`
  background-color: pink;
`;

export const UserInfoSection = styled.div`
  grid-area: userinfo;
`;
