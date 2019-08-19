import React from "react";
import { connect } from "react-redux";

class User extends React.Component {
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

export default connect(mapStateToProps)(User);
