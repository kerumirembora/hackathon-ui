import React from 'react';
import MenuWrapper from './../MenuWrapper';

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

const getCategory = (id) => {
    return categories.find((cat) => cat.id === id);
};

const wrapperStyle = {
    backgroundColor: "white",
    height: "100%"
};

const styleCardItem = {
    overflow: "hidden"
};
const styleCardImgContainer = {
    height: "170px"
};
const styleCardImg = {
    position: "absolute",
    top: "0"
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

class GoalCategoryDetailComponent extends React.Component {
    componentWillMount() {
        this.cat = getCategory(parseInt(this.props.match.params.catID));
    }

    componentDidMount() {
        window.$('.datepicker').datepicker();
    }

    render() {
        return (
            <MenuWrapper heading="Goal Category Detail">
                <div className="category-detail-wrapper" style={wrapperStyle}>

                    <div className="card" style={styleCardItem}>
                        <div className="card-image" style={styleCardImgContainer}>
                            <img src={this.cat.img} style={styleCardImg}/>
                            <span className="card-title" style={styleCardTitle}>{this.cat.name}</span>
                            <div className="dark-overlay" style={styleDarkOverlay}></div>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="name" type="text" className="validate" />
                                <label htmlFor="name">Goal Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="amount" type="text" className="validate" />
                                <label htmlFor="amount">Amount</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="unit" type="text" className="validate" />
                                <label htmlFor="unit">Unit</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="endDate" type="text" className="datepicker" />
                                <label htmlFor="endDate">End Date</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div style={{ marginTop: "auto", backgroundColor: "#EE6E73", textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}>
                    <a className="waves-effect waves-light btn red"><i className="material-icons right">send</i>Create Goal</a>
                </div>
            </MenuWrapper>
        );
    }
}

export const GoalCategoryDetail = GoalCategoryDetailComponent;