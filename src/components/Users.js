import React, { Component } from 'react';
import { connect } from "react-redux"
// add any needed imports here
class Users extends Component {

  render() {
    debugger
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        <h3>User Count: {this.props.userCount}</h3>
        <ul>
          {users}
        </ul>
      </div>

    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
