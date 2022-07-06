import React, { useState, useEffect } from "react";
import { Button } from "./style/component.css";

export default function TrendingTags() {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const tagsUrl =
    "https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow";
  useEffect(() => {
    fetch(tagsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTags(data.items);
        let firstTag = data.items[0].name;
        setCurrentTag(firstTag);
      });
  }, []);

  return (
    <div>
      <h2>Trending</h2>
      {tags.map((tag) => {
        return (
          <Button
            name={tag.name}
            bgc={tag.name === currentTag ? "lightblue" : "#fff"}
            color={tag.name === currentTag ? "#000" : "#636363"}

            onClick={() => setCurrentTag(tag.name)}
          >
            {tag.name}
          </Button>
        );
      })}
    </div>
  );
}
