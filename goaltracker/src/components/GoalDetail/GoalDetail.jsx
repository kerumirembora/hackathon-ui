import React from 'react';
import MenuWrapper from './../MenuWrapper';

const goalData = [
  { id: 1, name: "Facebook", unit: "mins", progress: 20, limit: 100 },
  { id: 2, name: "Curse Jar", unit: "curses", progress: 10, limit: 30 }
];

const getGoal = (id) => {
  for (let i = 0; i < goalData.length; i++) {
    var element = goalData[i];
    if (element.id === id)
      return element;
  }
}

class GoalDetailComponent extends React.Component {
  componentWillMount() {
    this.goal = getGoal(parseInt(this.props.match.params.goalID));
  }

  render() {
    return (
      <MenuWrapper heading="Goal Detail">
        <h3>{this.goal.name}</h3>
      </MenuWrapper>
    );
  }
}

export const GoalDetail = GoalDetailComponent;

