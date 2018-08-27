import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import ProgressIndicator from './../ProgressIndicator';

const goalData = [
  { id: 1, name: "Facebook", unit: "mins", progress: 20, limit: 100 },
  { id: 2, name: "Curse Jar", unit: "curses", progress: 3, limit: 30 }
];

const listStyle = {
  backgroundColor: "white",
  height: "100%"
};

const GoalsOverviewItem = ({ openGoal, name, unit, progress, limit, id }) => (
  <div className="card" onClick={() => openGoal(id)}>
    <div className="card-content">
      <div>
        {name}
      </div>
      <ProgressIndicator unit={unit} progress={progress} limit={limit} />
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
              (<GoalsOverviewItem name={goal.name} progress={goal.progress} limit={goal.limit} unit={goal.unit} id={goal.id} openGoal={openGoal} key={ "goalElement_" + goal.id } />)
            )
          }
        </div>
      </MenuWrapper>
    );
  }
}

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => {
  return {
    openGoal: (id) => {
      dispatch(push('/GoalDetail/' + id));
    }
  }
};

export const GoalsOverview = connect(mapStateToProps, mapDispatchToProps)(GoalsOverviewComponent);