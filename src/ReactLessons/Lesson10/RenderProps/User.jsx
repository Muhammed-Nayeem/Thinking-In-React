function User(props) {
  const { render } = props;

  return <div>{render(true)}</div>;
}

export default User;
