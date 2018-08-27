import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import './GoalsCategories.scss';

const categories = [
    { id: 1, name: "Social", img: "https://financialtribune.com/sites/default/files/styles/slideshow/public/field/image/shahrivar1/12_Social%20Media%20%281%29.jpg?itok=WU4SVOlO&c=a30dbb2db167c853d8c65a6b85b89f8a" },
    { id: 2, name: "Trip", img: "https://media.timeout.com/images/101594229/630/472/image.jpg" },
    { id: 3, name: "Curse Jar", img: "https://therooster.com/sites/default/files/userfiles/images/SwearJargif.gif" }
];

const styleCardItem = {
    // height: "173px",
    // overflow: "hidden"
    cursor: "pointer"
};

const GoalsCategoriesItem = ({ name, id, img }) => (
    <div className="card" style={styleCardItem}>
        <div className="card-image">
          <img src={img} />
          <span className="card-title">{name}</span>
        </div>
    </div>
);

class GoalsCategoriesComponent extends React.Component {
    render() {
        return (
            <MenuWrapper heading="Goals Categories">
                <div className="categories-wrapper">
                    {categories.map(cat => 
                        <GoalsCategoriesItem name={cat.name} id={cat.id} img={cat.img} key={ "categoryElement_" + cat.id } />
                    )}
                </div>
            </MenuWrapper>
        );        
    }
}

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => {
  return {
      // add function to go to the category details
  }
};

export const GoalsCategories = connect(mapStateToProps, mapDispatchToProps)(GoalsCategoriesComponent);