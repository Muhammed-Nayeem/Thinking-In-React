import React from "react";
import User from "./User";
import Post from "./Post";

//state-full component:
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      posts: [],
      users: [],
    };
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => this.tick(), 1000);
    this.fetchPostsData();
    this.fetchUsersData();
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  tick() {
    this.setState({
      date: new Date(), //this.state.date = new Date() - never do that;
    });
  }

  //post data fetching:
  fetchPostsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postsData) => {
        this.setState({
          posts: postsData.slice(0, 10),
        });
      });
  }

  //users data fetching:
  fetchUsersData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersData) => {
        this.setState({
          users: usersData,
        });
      });
  }

  render() {
    const { date, posts, users } = this.state;
    const { locale } = this.props;

    // console.log(posts);
    // console.log(users);

    return (
      <div className="clock-app">
        <h3 className="time-heading">{date.toLocaleTimeString(locale)}</h3>
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    );
  }
}

export default Clock;
