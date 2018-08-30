import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MenuWrapper from './../MenuWrapper';
import Metrics from './../Metrics';
import ProgressIndicator from './../ProgressIndicator';
import { actions } from '../../redux/actions/user';
import './GoalDetail.css';

const goalData = [
  { id: 1, name: "Facebook", unit: "mins", progress: 20, limit: 100 },
  { id: 2, name: "Curse Jar", unit: "curses", progress: 3, limit: 30 }
];

const newGoalData = [
  { id: 1, name: "Facebook", deadline: new Date('2018-09-03'), metrics: [
    { description: "Time spent on facebook", unit: "mins", amount: 20, limit: 100 },
    { description: "Amount saved", unit: "NOK", amount: 10 } 
  ]},
  { id: 2, name: "Curse Jar", deadline: new Date('2018-09-03'), metrics: [
    { description: "Curses said", unit: "curses", amount: 3, limit: 30 },
    { description: "Amount saved", unit: "NOK", amount: 30 } 
  ]},
  { id: 3, name: "Test Goal", deadline: new Date('2018-09-03'), metrics: [
    { description: "Test metric", unit: "unit", amount: 7, limit: 27 }
  ]}
];

const eventData = [
  { goalId: 1, date: new Date('2018-08-25T18:27:00'), message:'Your "mins" counter has been increased by 3.', unit: "mins", progress: 3 },
  { goalId: 1, date: new Date('2018-08-27T16:22:00'), message:'Your "mins" counter has been increased by 17.', unit: "mins", progress: 17 },
  { goalId: 2, date: new Date('2018-08-25T21:27:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 },
  { goalId: 2, date: new Date('2018-08-26T18:31:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 },
  { goalId: 2, date: new Date('2018-08-26T18:37:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 }
];

const socialData = [
  { goalId: 1, friends: [] },
  { goalId: 2, friends: [ { username: "Mascarenhas" }, { username: "Pacheco" } ]},
  { goalId: 3, friends: [ { username: "Mascarenhas" } ]}
];

const getFriends = (goalId) => {
  for (let i = 0; i < socialData.length; i++) {
    var element = socialData[i];
    if (element.goalId === goalId)
      return element.friends;
  }
}

const getGoal = (id) => {
  for (let i = 0; i < newGoalData.length; i++) {
    var element = newGoalData[i];
    if (element.id === id)
      return element;
  }
}

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

const getGoalEvents = (goalId) => {
  return eventData
    .filter((element) => element.goalId === goalId)
    .sort((a, b) => b.date - a.date);
}

const alternatingColor = [ 'gainsboro', 'white' ];

const GoalEventList = ({goalId}) => {
  var goalEventData = getGoalEvents(goalId);

  return (
    <div>
      <div style= {{ fontSize: "18px", paddingLeft: "10px" }}>Last events</div>
      {
        (goalEventData.length === 0) 
        ? (<div style={{ margin: "10px" }}>No events to show for this goal yet.</div>)
        : (<div style= {{ margin: "10px", border: "solid 1px gray" }}>
          {
            goalEventData.map((goal, index) => 
              (
                <div style={{ paddingLeft: "5px", paddingTop: "2px", paddingBottom: "2px", display: "flex", backgroundColor: alternatingColor[index % alternatingColor.length] }}
                    key={"event_" + goal.id + "_" + goal.date.toString()}> 
                  <div style={{ width: "25%", fontSize: "8pt" }}>{goal.date.toLocaleString()}</div>
                  <div style={{ width: "75%", fontSize: "8pt" }}>{goal.message}</div>
                </div>
              )
            )
          }
        </div>)
      }
    </div>
  );
}

const SocialSection = ({goalId}) => {
  var friendsData = getFriends(goalId);

  return (
    <div>
      <div style={{ fontSize: "18px", paddingLeft: "10px" }}>Social</div>
      {
        (friendsData.length === 0) 
          ? (<div style={{ margin: "10px" }}>No friends added to goal yet; add friends to track goals as a group.</div>)
          : friendsData.map(element => (
            <div style={{ margin: "10px", width: "100%" }}>
              <i className="material-icons left">person</i>{element.username}
            </div>
          ))
      }
      <div style={{ textAlign: "center" }}>
        <a className="waves-effect waves-light btn red"><i className="material-icons left">group_add</i>Add Friends</a>
      </div>
    </div>
  );
}

class GoalDetailComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      socialActionsVisible: false
    };
  }

  componentWillMount() {
    this.goal = getGoal(parseInt(this.props.match.params.goalID));
  }

  showSocialActions() {
    this.setState({ socialActionsVisible: true });
  }

  hideSocialActions() {
    this.setState({ socialActionsVisible: false });
  }

  render() {
    const { socialActionsVisible } = this.state;

    return (
      <MenuWrapper heading="Goal Detail">
        <div style={mainElementStyle}>
          <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "30px" }}>{this.goal.name}</div>
          <div style={{ display: "flex", paddingLeft: "15px", paddingTop: "10px" }}>
            <div style={{ paddingLeft: "0px", paddingTop: "0px", fontWeight: "bold" }}>Deadline:</div>
            <div style={{ paddingLeft: "10px", paddingTop: "0px" }}>{this.goal.deadline.toLocaleDateString()}</div>
          </div>
          <div style={{ paddingLeft: "15px", paddingRight: "15px", marginTop: "10px" }}>
            <Metrics metrics={this.goal.metrics} />
          </div>
          <hr style={horizontalSeparator}/>
          <GoalEventList goalId={this.goal.id} />
          <hr style={horizontalSeparator}/>
          <SocialSection goalId={this.goal.id} />

          <div style={{ marginTop: "auto", backgroundColor: "#EE6E73", textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}>
            <a className="waves-effect waves-light btn red"><i className="material-icons left">add_box</i>Actions</a>

            &nbsp;&nbsp;
            <a className="waves-effect waves-light btn red" onClick={() => this.showSocialActions()}><i className="material-icons left">group</i>Social</a>

            <div className={`social-actions-wrapper${socialActionsVisible ? '' : ' hide'}`}>
              <div className="collection center-align social-actions-container" style={socialActionsContainerStyle}>
                <a className="collection-item">Snitch</a>
                <a className="collection-item">Encourage</a>
                <a className="collection-item">Brag</a>
              </div>
            </div>            
          </div>
        </div>

        <div className={`dark-app-overlay${socialActionsVisible ? '' : ' hide'}`} style={darkAppOverlayStyle} onClick={()=> this.hideSocialActions()}></div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({});
}

const mapDispatchToProps = dispatch => {

}

export const GoalDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(GoalDetailComponent));