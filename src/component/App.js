import React, { useState, useEffect } from "react";
import QuestionListing from "./QuestionListing";
import SearchingBar from "./searchingBar";
import GlobalStyle from "./style/global.css";
import TrendingTags from "./TrendingTags";
import { Container } from "./style/component.css";
import { fetchQuesions } from "../reducers/questionsSlice";
import { fetchTags } from "../reducers/tagsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const [currentTag, setCurrentTag] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    let fetchTagsURL = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow`;
    dispatch(fetchTags({ url: fetchTagsURL }));
  }, []);

  useEffect(() => {
    let fetchURLQuestions = `https://api.stackexchange.com/2.3/questions?page=${pageNumber}&pagesize=20&order=desc&sort=activity&tagged=${currentTag}&site=stackoverflow`;
    if (currentTag != null) dispatch(fetchQuesions({ url: fetchURLQuestions }));
  }, [currentTag]);

  return (
    <Container>
      {/* <GlobalStyle /> */}
      <SearchingBar />
      <TrendingTags currentTag={currentTag} setCurrentTag={setCurrentTag} />
      <QuestionListing setPageNumber={setPageNumber} />
    </Container>
  );
}
