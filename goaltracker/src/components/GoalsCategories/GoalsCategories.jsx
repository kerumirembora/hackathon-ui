import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';

const categories = [
    { id: 1, name: "Social" },
    { id: 2, name: "Trip" },
    { id: 3, name: "Curse Jar" }
];

class GoalsCategoriesComponent extends React.Component {
    render() {
        return (
            <MenuWrapper heading="Goals Categories">
                <div>
                    categories!!
                </div>
            </MenuWrapper>
        );        
    }
}

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => {
  return {    
  }
};

export const GoalsCategories = connect(mapStateToProps, mapDispatchToProps)(GoalsCategoriesComponent);