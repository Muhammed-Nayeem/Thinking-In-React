function Post(props) {
  const {title, body} = props.post;
  // console.log(props.post);

  return (
    <div className="post-data">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default Post;
