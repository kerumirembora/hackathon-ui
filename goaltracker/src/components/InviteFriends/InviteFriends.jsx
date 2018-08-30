import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MenuWrapper from './../MenuWrapper';
import { actions } from '../../redux/actions/goal';

const testData = [
  { username: 'Roberto Rui' },
  { username: 'Ernesto Rogério'}
]

class InviteFriendsComponent extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.loadAvailableUsers(this.props.userId, this.props.match.params.goalID);
  }

  render() {
    const { inviteUser, availableUsers } = this.props;

    return (
      <MenuWrapper heading="Invite Friends">
        <div>
          <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "30px" }}>Invite Friends</div>
          <div style={{ padding: "0px 10px"}}>
            {
              availableUsers.map(user => 
              (
                <div className="card" key={"user_" + user.id} style={{ margin: "5px 5px" }}>
                  <div className="card-content" style={{ padding: "7px", display: "flex", alignItems: "center" }}>
                    <div style={{ width: "80%"}}><i className="material-icons left">person</i>{user.name}</div>
                    <div style={{ textAlign: "right", width: "20%"}}>
                      <a className="waves-effect waves-light btn-small red" onClick={() => inviteUser(this.props.userId, this.props.match.params.goalID, user.id)}>Add</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
    userId: state.goaltracker.user.userData.id,
    availableUsers: state.goaltracker.goal.goalAvailableUsers.users
  });
}

const mapDispatchToProps = dispatch => {
  return {
    loadAvailableUsers: (userId, userGoalId) => {
      dispatch(actions.getGoalAvailableUsers({ userId, userGoalId }));
    },
    inviteUser: (userId, userGoalId, inviteUserId) => {
      dispatch(actions.inviteUser({ userId, userGoalId, inviteUserId }));
    }
  }
}

export const InviteFriends = withRouter(connect(mapStateToProps, mapDispatchToProps)(InviteFriendsComponent));