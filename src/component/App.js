import React, { useState } from "react";
import QuestionListing from "./QuestionListing";
import SearchingBar from "./searchingBar";
import GlobalStyle from "./style/global.css";
import TrendingTags from "./TrendingTags";
import { Container } from "./style/component.css";
import GetParams from "../utils/GetParams";
import { fetchQuesions } from "../reducers/questionsSlice";
import { fetchTags } from "../reducers/tagsSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch=useDispatch()
  const [currentTag, setCurrentTag] = useState("");
  let pageNumber;

  useEffect(() => {
    let fetchTagsURL = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow`;
    dispatch(fetchTags({ url: fetchTagsURL }));
    let fetchQuestionsURL = `https://api.stackexchange.com/2.3/questions?page=1&pagesize=20&order=desc&sort=activity&tagged=${currentTag}&site=stackoverflow`;
    dispatch(fetchQuesions({ url: fetchQuestionsURL }));
  }, []);

  return (
    <Container>
      {/* <GlobalStyle /> */}
      <SearchingBar />
      <TrendingTags currentTag={currentTag} setCurrentTag={setCurrentTag} />
      <QuestionListing />
      <GetParams />
    </Container>
  );
}
