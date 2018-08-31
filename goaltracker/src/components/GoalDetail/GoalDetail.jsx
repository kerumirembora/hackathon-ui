import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import Metrics from './../Metrics';
import ProgressIndicator from './../ProgressIndicator';
import { actions } from '../../redux/actions/user';
import { actions as goalActions } from '../../redux/actions/goal';
import './GoalDetail.css';


const mainElementStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

const horizontalSeparator = {
  border: "0",
  width: "100%",
  height: "2px",
  backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
  marginTop: "10px",
  marginBottom: "10px",
}

const darkAppOverlayStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#000",
  zIndex: 5,
  opacity: "0.35"
};
const socialActionsContainerStyle = {
  zIndex: 10,
  position: "absolute",
  width: "100%",
  top: "-165px",
  borderRadius: "10px"
};

const alternatingColor = [ 'gainsboro', 'white' ];

const GoalEventList = ({ goalEventData }) => {
  return (
    <div>
      <div style= {{ fontSize: "18px", paddingLeft: "10px" }}>Last events</div>
      {
        (goalEventData.length === 0) 
        ? (<div style={{ margin: "10px" }}>No events to show for this goal yet.</div>)
        : (<div style= {{ margin: "10px", border: "solid 1px gray" }}>
          {
            goalEventData.map((event, index) => 
              (
                <div style={{ paddingLeft: "5px", paddingTop: "2px", paddingBottom: "2px", display: "flex", backgroundColor: alternatingColor[index % alternatingColor.length] }}
                    key={"event_" + event.id + "_" + (new Date(event.creationDate)).toString()}> 
                  <div style={{ width: "25%", fontSize: "8pt" }}>{(new Date(event.creationDate)).toLocaleString()}</div>
                  <div style={{ width: "75%", fontSize: "8pt" }}>{event.description}</div>
                </div>
              )
            )
          }
        </div>)
      }
    </div>
  );
}

const SocialSection = ({ friendsData, goalId, addUsers }) => {
  return (
    <div>
      <div style={{ fontSize: "18px", paddingLeft: "10px" }}>Social</div>
      {
        (friendsData.length === 0) 
          ? (<div style={{ margin: "10px" }}>No friends added to goal yet; add friends to track goals as a group.</div>)
          : friendsData.map(element => (
            <div style={{ margin: "10px", width: "100%" }} key={"user_" + element.name}>
              <i className="material-icons left">person</i>{element.name}
            </div>
          ))
      }
      <div style={{ textAlign: "center" }}>
        <a className="waves-effect waves-light btn red" onClick={() => addUsers(goalId)}><i className="material-icons left">group_add</i>Add Friends</a>
      </div>
    </div>
  );
}

class GoalDetailComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      socialActionsVisible: false,
      updateAmount: '',
      userToSnitch: ''
    };
  }

  componentWillMount() {
    const goalId = parseInt(this.props.match.params.goalID);
    this.props.getGoalDetails(goalId, this.props.userId);
  }

  showSocialActions() {
    this.setState({ socialActionsVisible: true });
  }

  hideSocialActions() {
    this.setState({ socialActionsVisible: false });
  }

  updateAmountChanged(evt) {
    this.setState({
      updateAmount: evt.target.value
    });
  }

  getUsersAsOptions(friendsList) {
    const userOptions = [];
    for (let i = 0; i < friendsList.length; i++) {
      userOptions.push(<option key={friendsList[i].id} value={friendsList[i].id}>{friendsList[i].name}</option>)
    }
    return userOptions;
  }

  userToSnitchChanged(evt) {
    this.setState({
      userToSnitch: evt.target.value
    });
  }

  render() {
    const { addUsers, goal, updateGoalProgress } = this.props;
    const { socialActionsVisible } = this.state;

    const friendsList = goal.participatingUsers.filter(el => el.id !== this.props.userId);

    return (
      <MenuWrapper heading="Goal Detail">
        <div style={mainElementStyle}>
          <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "30px" }}>{goal.name}</div>
          <div style={{ display: "flex", paddingLeft: "15px", paddingTop: "10px" }}>
            <div style={{ paddingLeft: "0px", paddingTop: "0px", fontWeight: "bold" }}>Deadline:</div>
            <div style={{ paddingLeft: "10px", paddingTop: "0px" }}>{new Date(goal.deadlineDate).toLocaleDateString()}</div>
          </div>
          <div style={{ paddingLeft: "15px", paddingRight: "15px", marginTop: "10px" }}>
            <Metrics metrics={goal.metrics} />
          </div>
          
          <hr style={horizontalSeparator}/>
          <div>
            <div style={{ fontSize: "18px", paddingLeft: "10px" }}>Manual actions</div>
            <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
              <div style={{ width: "17%", fontWeight: "bold" }}>Increase</div>
              <div style={{ width: "40%" }}>
                <input type="text" name="Amount" className="browser-default" value={this.state.updateAmount} onChange={evt => this.updateAmountChanged(evt)}
                      style={{ width: "60%", borderColor: "gray", borderWidth: "1px", height: "25px" }}></input>&nbsp;&nbsp;curses
              </div>
              <div style={{ paddingLeft: "10px" }}>
                <a className="waves-effect waves-light btn-small red" onClick={() => updateGoalProgress(this.props.match.params.goalID, this.props.userId, this.state.updateAmount)}>Update</a>
              </div>
            </div>
          </div>

          <hr style={horizontalSeparator}/>
          <div>
            <div style={{ fontSize: "18px", paddingLeft: "10px" }}>Group actions</div>
            <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
              <div style={{ width: "17%", fontWeight: "bold" }}>Snitch</div>
              <div style={{ width: "40%" }}>
                <select name="User" className="browser-default" style={{ height: "25px", borderColor: "gray", paddingTop: "0px" }} onChange={evt => this.userToSnitchChanged(evt)}>
                  <option value="">Select an user</option>
                  {this.getUsersAsOptions(friendsList)}
                </select>
              </div>
              <div style={{ paddingLeft: "10px" }}>
                <a className="waves-effect waves-light btn-small red" onClick={() => updateGoalProgress(this.props.match.params.goalID, this.state.userToSnitch, 1)}>Report</a>
              </div>
            </div>
          </div>

          <hr style={horizontalSeparator}/>
          <GoalEventList goalEventData={goal.loggedUserEvents} />

          <hr style={horizontalSeparator}/>
          <SocialSection goalId={goal.id} addUsers={addUsers} friendsData={friendsList} />
        </div>

        <div className={`dark-app-overlay${socialActionsVisible ? '' : ' hide'}`} style={darkAppOverlayStyle} onClick={()=> this.hideSocialActions()}></div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    goal: state.goaltracker.user.userGoalData,
    userId: state.goaltracker.user.userData.id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addUsers: (goalId) => {
      dispatch(push(`/add-friends/${goalId}`));
    },
    getGoalDetails: (goalId, userId) => {
      dispatch(actions.getUserGoalData({ goalId, userId }));
    },
    updateGoalProgress: (userGoalId, subscriber, amount) => {
      dispatch(goalActions.updateProgress({ userGoalId, subscriber, amount }));
    }
  };
}

export const GoalDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(GoalDetailComponent));