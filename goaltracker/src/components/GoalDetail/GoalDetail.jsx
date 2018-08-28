import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MenuWrapper from './../MenuWrapper';
import ProgressIndicator from './../ProgressIndicator';
import { actions } from '../../redux/actions/user';

const goalData = [
  { id: 1, name: "Facebook", unit: "mins", progress: 20, limit: 100 },
  { id: 2, name: "Curse Jar", unit: "curses", progress: 3, limit: 30 }
];

const eventData = [
  { goalId: 1, date: new Date('2018-08-25T18:27:00'), message:'Your "mins" counter has been increased by 3.', unit: "mins", progress: 3 },
  { goalId: 1, date: new Date('2018-08-27T16:22:00'), message:'Your "mins" counter has been increased by 17.', unit: "mins", progress: 17 },
  { goalId: 2, date: new Date('2018-08-25T21:27:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 },
  { goalId: 2, date: new Date('2018-08-26T18:31:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 },
  { goalId: 2, date: new Date('2018-08-26T18:37:00'), message:'You have increased your "curses" counter by 1.', unit: "curses", progress: 1 }
];

const getGoal = (id) => {
  for (let i = 0; i < goalData.length; i++) {
    var element = goalData[i];
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
      <div style= {{ margin: "10px", border: "solid 1px gray" }}>
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
      </div>
    </div>
  );
}

const SocialSection = () => (
  <div>
    <div style={{ fontSize: "18px", paddingLeft: "10px" }}>Social</div>
    <div style={{ margin: "10px", fontSize: "9pt" }}>No friends added to goal yet; add friends to track goals as a group.</div>
    <div style={{ textAlign: "center" }}>
      <a className="waves-effect waves-light btn red"><i className="material-icons left">group_add</i>Add Friends</a>
    </div>
  </div>
);

class GoalDetailComponent extends React.Component {
  componentWillMount() {
    this.goal = getGoal(parseInt(this.props.match.params.goalID));
  }

  render() {
    const { testUserPost } = this.props;

    return (
      <MenuWrapper heading="Goal Detail">
        <div style={mainElementStyle}>
          <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "30px" }}>{this.goal.name}</div>
          <div style={{ paddingLeft: "15px", paddingRight: "15px", marginTop: "15px" }}>
            <ProgressIndicator unit={this.goal.unit} progress={this.goal.progress} limit={this.goal.limit} />
          </div>
          <hr style={horizontalSeparator}/>
          <GoalEventList goalId={this.goal.id} />
          <hr style={horizontalSeparator}/>
          <SocialSection />

          <div style={{ marginTop: "auto", backgroundColor: "#EE6E73", textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}>
            <a className="waves-effect waves-light btn red" onClick={() => testUserPost("lala")}><i className="material-icons left">add_box</i>Actions</a>
            &nbsp;&nbsp;
            <a className="waves-effect waves-light btn red"><i className="material-icons left">group</i>Social</a>
          </div>
        </div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({});
}

const mapDispatchToProps = dispatch => {
  return {
    testUserPost: (user) => {
      dispatch(actions.postUser({ user }));
    }
  }
}

export const GoalDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(GoalDetailComponent));