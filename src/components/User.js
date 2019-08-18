import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  render() {
    return (
      <div>
        <h6> AUTHOR INFO </h6>
        <strong>{this.props.user.username}</strong>
        <em> {this.props.user.email} </em>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(User);
