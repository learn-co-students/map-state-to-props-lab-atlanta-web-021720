import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    // debugger
    console.log(this.props);
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */
            
            this.props.users.map(user =><li>{user.username}</li>)
          }
          {/* In addition, display the total number of users curently in the store */
            this.props.userCount
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
// export default Users
function mapStateToProps(state)
{
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
