

function User(props) {
  const {name, email} = props.user;
  // console.log(props.user);

  return (
    <div className="user-data">
      <h3>User-Name: {name}</h3>
      <p>User-Email: {email}</p>
    </div>
  );
}

export default User;
