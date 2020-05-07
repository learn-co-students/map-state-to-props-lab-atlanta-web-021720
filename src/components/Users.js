import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br/><br/>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          { this.props.users.map(user => <li>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
          Total users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
