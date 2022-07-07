import React, { useState, useEffect, useRef } from "react";
import { Button, TrendingWrapper } from "./style/component.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../reducers/tagsSlice";
import { fetchQuesions } from "../reducers/questionsSlice";

export default function TrendingTags({ currentTag, setCurrentTag }) {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const [firstTag, setFirstTag] = useState("");

  useEffect(() => {
    setFirstTag(new Object(tags.tags[0]).name);
  }, []);

  useEffect(() => {
    setCurrentTag(firstTag);
  }, [tags]);

  function handleClick(e) {
    setCurrentTag(e);
  }

  return (
    <TrendingWrapper>
      <h2>Trending</h2>
      {tags.loading && <div>Loading...</div>}
      {!tags.loading && tags.error ? <div>Error:{tags.error}</div> : null}
      {!tags.loading &&
        tags.tags.length &&
        tags.tags.map((tag) => {
          return (
            <Button
              name={tag.name}
              value={tag.name}
              bgc={tag.name === currentTag ? "lightblue" : "#fff"}
              color={tag.name === currentTag ? "#000" : "#636363"}
              onClick={(e) => handleClick(e.target.value)}
            >
              {tag.name}
            </Button>
          );
        })}
    </TrendingWrapper>
  );
}
