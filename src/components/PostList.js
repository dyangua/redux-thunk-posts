import React from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import User from "./User";

const renderPostList = ({ id, title, body, userId }) => (
  <div key={id}>
    <hr />
    <h5>
      <strong>{title.toUpperCase()}</strong>
    </h5>
    <p>{body}</p>

    <User userId={userId} />
  </div>
);

class PostList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="container">
        {this.props.posts.map(post => renderPostList(post))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
