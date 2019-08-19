import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h6> AUTHOR INFO </h6>
        {user && (
          <div>
            <strong>{user.username}</strong>
            <em> {user.email} </em>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userPost = state.users.find(user => user.id === ownProps.userId);
  return {
    user: userPost
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(User);
