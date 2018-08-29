import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuWrapper from './../MenuWrapper';
import './GoalsCategories.scss';

const categories = [
    { 
        id: 1, 
        name: "Social", 
        img: "https://financialtribune.com/sites/default/files/styles/slideshow/public/field/image/shahrivar1/12_Social%20Media%20%281%29.jpg?itok=WU4SVOlO&c=a30dbb2db167c853d8c65a6b85b89f8a",
        description: "My social media activities"
    },
    { 
        id: 2, 
        name: "Trip", 
        img: "https://media.timeout.com/images/101594229/630/472/image.jpg",
        description: "Going on a trip"
    },
    { 
        id: 3, 
        name: "Curse Jar", 
        img: "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F67767244-0b54-11e7-85f8-9e9ad2f5cb5c.jpg?crop=3469%2C1951%2C311%2C2266&resize=685",
        description: "For whenever I say something inappropriate"
    }
];

const styleCardItem = {
    height: "200px",
    cursor: "pointer"
};
const styleCardImgContainer = {
    height: "170px"
};
const styleCardImg = {
    position: "absolute",
    top: "-44%"
};
const styleCardTitle = {
    zIndex: 2,
    textShadow: "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"
};
const styleDarkOverlay = {
    position: "absolute",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.3
};

const GoalsCategoriesItem = ({ name, id, img, description, openCategory }) => (
    <div className="card small hoverable" style={styleCardItem} onClick={() => openCategory(id)}>
        <div className="card-image" style={styleCardImgContainer}>
          <img src={img} style={styleCardImg} alt={name}/>
          <span className="card-title" style={styleCardTitle}>{name}</span>
          <div className="dark-overlay" style={styleDarkOverlay}></div>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
    </div>
);

class GoalsCategoriesComponent extends React.Component {
    render() {
        const { openCategory } = this.props;
        return (
            <MenuWrapper heading="Goals Categories">
                <div className="categories-wrapper">
                    {categories.map(cat => 
                        <GoalsCategoriesItem name={cat.name} id={cat.id} img={cat.img} key={ "categoryElement_" + cat.id } description={cat.description} openCategory={openCategory} />
                    )}
                </div>
            </MenuWrapper>
        );        
    }
}

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => {
  return {
    openCategory: (id) => {
        dispatch(push(`/goals-categories/${id}/new`));
    }
  }
};

export const GoalsCategories = connect(mapStateToProps, mapDispatchToProps)(GoalsCategoriesComponent);