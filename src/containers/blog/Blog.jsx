import React, { useEffect, useState } from "react";
import Article from "../../components/article/Article";
// import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gianyrox";

  function fetchBlogs() {
    fetch(rss2json)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setBlogs(data.items);
      });
  }

  useEffect(() => {
    fetchBlogs();
  }, [rss2json]);
  return (
    <div className="estop__blog section__padding" id="blog">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd0Wyb93RMPOAisySGuYutE23QszY6o6NkXZ_tQPZ14PGm_XA/viewform?embedded=true"
        width="640"
        height="1093"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
