import React, { useState, useEffect } from "react";
import QuestionListing from "./QuestionListing";
import SearchingBar from "./searchingBar";
import GlobalStyle from "./style/global.css";
import TrendingTags from "./TrendingTags";
import { Container } from "./style/component.css";
import { clearupValue, fetchQuesions } from "../reducers/questionsSlice";
import { fetchTags } from "../reducers/tagsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const [currentTag, setCurrentTag] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchWordInput, setSearchWordInput] = useState("");

  useEffect(() => {
    dispatch(clearupValue());
  }, [currentTag, searchWordInput]);

  let fetchTagsURL;
  let fetchURLQuestions;

  useEffect(() => {
    if (searchWordInput == null) {
      fetchTagsURL = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow`;
    } else {
      fetchTagsURL = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&inname=${searchWordInput}&site=stackoverflow`;
    }
    dispatch(fetchTags({ url: fetchTagsURL }));
  }, [searchWordInput]);

  useEffect(() => {
    fetchURLQuestions = `https://api.stackexchange.com/2.3/questions?page=${pageNumber}&pagesize=20&order=desc&sort=activity&tagged=${currentTag}&site=stackoverflow`;
    if (currentTag !== null && currentTag !== undefined)
      dispatch(fetchQuesions({ url: fetchURLQuestions }));
  }, [currentTag, pageNumber]);

  return (
    <Container>
      <GlobalStyle />
      <SearchingBar setSearchWordInput={setSearchWordInput} />
      <TrendingTags currentTag={currentTag} setCurrentTag={setCurrentTag} />
      <QuestionListing setPageNumber={setPageNumber} />
    </Container>
  );
}
