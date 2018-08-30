import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import Metrics from './../Metrics';
import ProgressIndicator from './../ProgressIndicator';
import { actions } from '../../redux/actions/user';

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

const listStyle = {
  backgroundColor: "white",
  height: "100%"
};

const cardItemStyle = {
  cursor: "pointer"
};

const GoalsOverviewItem = ({ openGoal, id, name, deadline, metrics }) => (
  <div className="card hoverable" onClick={() => openGoal(id)} style={cardItemStyle}>
    <div className="card-content" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
      <div style={{ display: "flex", fontSize: "17px" }}>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          {name}
        </div>
        <div style={{ color: "gray", marginLeft: "5px" }}>
          <i>{ "(until " + deadline.toLocaleDateString() + ")" }</i>
        </div>
      </div>
      <Metrics metrics={metrics} />
    </div>
  </div>
);

class GoalsOverviewComponent extends React.Component {
  componentWillMount() {
    this.props.getUserData("JohnDoe"); //TODO keep hardcoded for prototype?
  }

  render() {
    const {
      openGoal,
      chooseCategory,
      goalData
    } = this.props;
    
    return (
      <MenuWrapper heading="Goals Overview">
        <div style={listStyle}>
          {
            goalData.map(goal => 
              (<GoalsOverviewItem id={goal.goalId} name={goal.name} metrics={goal.metrics} deadline={new Date(goal.deadline)} openGoal={openGoal} key={ "goalElement_" + goal.goalId } />)
            )
          }
        </div>

        <div style={{ marginTop: "auto", backgroundColor: "#EE6E73", textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}>
          <a className="waves-effect waves-light btn red" onClick={() => chooseCategory()}><i className="material-icons left">add_box</i>Add Goal</a>
        </div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => (
  {
    goalData: state.goaltracker.user.userData.goals
  } 
);

const mapDispatchToProps = dispatch => {
  return {
    getUserData: (user) => {
      dispatch(actions.getUserData({ user }));
    },
    openGoal: (id) => {
      dispatch(push(`/goals/${id}`));
    },
    chooseCategory: () => {
      dispatch(push('/goals-categories'));
    }
  }
};

export const GoalsOverview = connect(mapStateToProps, mapDispatchToProps)(GoalsOverviewComponent);