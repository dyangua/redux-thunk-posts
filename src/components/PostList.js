import React from "react";
import { fetchPosts, fetchUsers } from "../actions";

import { connect } from "react-redux";
import User from "./User";

const renderPostList = props => {
  const { post, users } = props;
  const user = users.find(user => user.id === post.userId);

  return (
    <div key={post.id}>
      <hr />
      <h5>
        <strong>{post.title.toUpperCase()}</strong>
      </h5>
      <p>{post.body}</p>

      <User user={user} />
    </div>
  );
};

class PostList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render() {
    const { users, posts } = this.props;
    return (
      <div className="container">
        {users.length > 0 && posts.map(post => renderPostList({ post, users }))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.users);
  return {
    posts: state.posts,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts, fetchUsers }
)(PostList);
