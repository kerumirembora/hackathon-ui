import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';

const goalData = [
  { id: 1, name: "Facebook", unit: "mins", progress: 20, limit: 100 },
  { id: 2, name: "Curse Jar", unit: "curses", progress: 10, limit: 30 }
];

const listStyle = {};
const unitLabelStyle = {
  textAlign: 'right'
};

const getProgress = (progress, limit) => {
  return {
    width: (progress / limit * 100) + "%"
  };
}

const GoalsOverviewItem = ({ openGoal, name, unit, progress, limit, id }) => (
  <div class="card" onClick={() => openGoal(id)}>
    <div class="card-content">
      <div>
        {name}
      </div>
      <div class="progress">
        <div class="determinate" style={getProgress(progress, limit)}></div> 
      </div>
      <div style={unitLabelStyle}>
        { progress + "/" + limit + " " + unit }
      </div>
    </div>
  </div>
);

class GoalsOverviewComponent extends React.Component {
  render() {
    const {
      openGoal
    } = this.props;
    
    return (
      <MenuWrapper heading="Goals Overview">
        <div style={listStyle}>
          {
            goalData.map(goal => 
              (
                <GoalsOverviewItem name={goal.name} progress={goal.progress} limit={goal.limit} unit={goal.unit} id={goal.id} openGoal={openGoal} />
              )
            )
          }
        </div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
  return {
    openGoal: (id) => {
      dispatch(push('/GoalDetail/' + id));
    }
  }
};

export const GoalsOverview = connect(mapStateToProps, mapDispatchToProps)(GoalsOverviewComponent);