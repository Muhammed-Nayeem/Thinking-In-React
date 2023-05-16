import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.result,
      };

    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a problem in data fetching!",
      };

    default:
      return state;
  }
};

const GetPost2 = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  // const { loading, error, post: {title} } = currentState;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div className="get-post">
      <h3>{currentState.loading ? "Loading...." : currentState.post.title}</h3>
      <p>{currentState.error ? currentState.error : null}</p>
      {/* <h3>{loading ? "Loading...." : title}</h3>
      <p>{error ? error : null}</p> */}
    </div>
  );
};

export default GetPost2;
