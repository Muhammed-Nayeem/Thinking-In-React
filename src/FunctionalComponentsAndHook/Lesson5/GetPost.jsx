import React, { useState, useEffect } from "react";

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError("");
        setPost(data);
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There was a problem in Data Fetching....!");
      });
  }, []);

  return (
    <div className="get-post">
      <h3>{loading ? "Loading...." : post.title}</h3>
      <p>{error ? error : null}</p>
    </div>
  );
};

export default GetPost;
