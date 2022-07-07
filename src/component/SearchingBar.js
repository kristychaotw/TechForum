import React, { useRef } from "react";
import { SearchingBarWrapper } from "./style/component.css";
import { useDispatch } from "react-redux";
import { fetchTags } from "../reducers/tagsSlice";

export default function SearchingBar() {
  const searchRef = useRef();
  const dispatch = useDispatch();

  function handleSubmit() {
    let searchWordInput = searchRef.current.value;
    let fetchURLTags = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&inname=${searchWordInput}&site=stackoverflow`;
    dispatch(fetchTags({ url: fetchURLTags }));
  }
  return (
    <SearchingBarWrapper>
      <input ref={searchRef} type="text" placeholder="Tag" />
      <input type="submit" value="Search" onClick={handleSubmit} />
    </SearchingBarWrapper>
  );
}
